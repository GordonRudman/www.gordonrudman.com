// This #include statement was automatically added by the Particle IDE.
#include <DS18B20.h>

#include <DS18B20.h>

const int MAXRETRY = 3;
const int pinOneWire = D5;
const int pinLED = D0;
const uint32_t msSampleTime = 300;
const uint32_t msPublishTime = 4000;
const int nSENSORS = 3;

int aquariumLightSensorPin = A0;
float aquariumLightSensorValue = 0;

int roomLightSensorPin = A1;
float roomLightSensorValue = 0;

DS18B20 ds18b20(pinOneWire);

retained uint8_t sensorAddresses[nSENSORS][8];

float celsius[nSENSORS] = {NAN, NAN, NAN};

void setup() {
  pinMode(pinLED, OUTPUT);

  ds18b20.resetsearch();                 // initialise for sensor search
  for (int i = 0; i < nSENSORS; i++) {   // try to read the sensor addresses
    ds18b20.search(sensorAddresses[i]); // and if available store
  }
}

float collectLightReading(int pin)
{
    float pinValue = analogRead(pin);
    float percentage = (pinValue*100.0) / 4096.0; 
    return percentage;
}

void loop() {
  static uint32_t msSample = 0;
  static uint32_t msPublish = 0;

  if (millis() - msSample >= msSampleTime) {
    msSample = millis();
    for (int i = 0; i < nSENSORS; i++) {
      float temp = getTemp(sensorAddresses[i]);
      if (!isnan(temp)) celsius[i] = temp;
    }
  }
  
   aquariumLightSensorValue = collectLightReading(aquariumLightSensorPin);
   aquariumLightSensorValue *= 10; // To make up for the fact that the lighting isn't direct, but is only reflected off the water

   roomLightSensorValue = collectLightReading(roomLightSensorPin); 


  if (millis() - msPublish >= msPublishTime) {
    msPublish = millis();
    Serial.println("Publishing now.");
    publishData();
  }
}

double getTemp(uint8_t addr[8]) {
  double _temp;
  int   i = 0;

  do {
    _temp = ds18b20.getTemperature(addr);
  } while (!ds18b20.crcCheck() && MAXRETRY > i++);

  if (i < MAXRETRY) {
    //_temp = ds18b20.convertToFahrenheit(_temp);
    Serial.println(_temp);
  }
  else {
    _temp = NAN;
    Serial.println("Invalid reading");
  }

  return _temp;
}

void publishData() {
  char szInfo[64];
  snprintf(szInfo, sizeof(szInfo), "{ \"T1\": %.1f, \"T2\": %.1f, \"T3\": %.1f, \"L1\": %.1f, \"L2\": %.1f }", celsius[0], celsius[1], celsius[2], aquariumLightSensorValue, roomLightSensorValue);
  Particle.publish("Data", szInfo, PRIVATE);
}
