var __eon_pubnub = new PubNub({
        subscribeKey: "sub-c-c0f487d4-91f3-11e9-9769-e24cdeae5ee1"
      });
      var __eon_cols = ["T1","T2","T3"]; 
      var __eon_labels = {"T1":"Water (Above heater)", "T2":"Water (Away from heater)", "T3":"Air (Above tank)"}; 
      
      chart = eon.chart({
        pubnub: __eon_pubnub,
        channels: ["Aquarium"],
        history: false,
        flow: true,
        rate: 200,
        limit: 35,
        generate: {
          bindto: "#Iot_AquariumTemperatureChart",
          data: {
            colors: {"Water (Above heater)":"#e92133", "Water (Away from heater)":"#1c40da", "Air (Above tank)":"#00c5cb"},
            type: "spline"
          },
          transition: {
            duration: 250
          },
          axis: {
            x : {
                  label: 'Time',
                  type : 'timeseries',
                  tick: { format: '%H:%M:%S', culling: { max: 3 } } 
                },
            y: {
                label: {text: 'Temperature', position: 'outer-middle'},
              // min: 15,
              // max: 30,
              // tick:  {format: function (d) { return d + '°C'; }}
                tick:  {format: function (d) { 
                                                  return d3.format(".1f")(d) + "°C"; 
                                              }}
                } 
          },
          grid: {
            x: {
              show: false 
            },
            y: {
              show: false 
            }
          },
          tooltip: {
          show: true
          },
          point: {
            show: true
          }
        },
        transform: function(message) {
          var message = eon.c.flatten(message.eon);
          var o = {};
          for(index in message) {
            if(__eon_cols.indexOf(index) > -1){
              o[__eon_labels[index] || index] = message[index];
            }
          }
          return {
            eon: o
          };
        }
      });

      var lightGauge1 = eon.chart({
        pubnub: __eon_pubnub,
        channels: ["Aquarium"],
        generate: {
                    title: { text: 'Aquarium' },
                    bindto: '#Iot_AquariumLightGauge',
                    data: {
                            columns: ['L1'],
                            names: { L1 : "Light" },
                            hide: ['T1','T2','T3','L2'],
                            type: 'gauge'
                          },
       
                    gauge: {
                //        label: {
                //            format: function(value, ratio) {
                //                return value;
                //            },
                //            show: false // to turn off the min/max labels.
                //        },
                //    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
                //    max: 100, // 100 is default
                //    max: 10, // 100 is default
                //    units: ' %',
                //    width: 39 // for adjusting arc thickness
                    },
                    color: {
                        pattern: ['#07578b', '#b1130e', '#F97600', '#F6C600'], // the three color levels for the percentage values.
                        threshold: {
                //            unit: 'value', // percentage is default
                //            max: 200, // 100 is default
                            values: [30, 60, 90, 100]
                        }
                    },
                    size: { height: 180 }
                }
      });


      
      var lightGauge2 = eon.chart({
        pubnub: __eon_pubnub,
        channels: ["Aquarium"],
        generate: {
                    title: { text: 'Room' },
                    bindto: '#Iot_RoomLightGauge',
                    data: {
                            columns: ['L2'],
                            names: { L1 : "Light" },
                            hide: ['T1','T2','T3','L1'],
                            type: 'gauge'
                          },
       
                    gauge: {
                //        label: {
                //            format: function(value, ratio) {
                //                return value;
                //            },
                //            show: false // to turn off the min/max labels.
                //        },
                //    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
                //    max: 100, // 100 is default
                //    max: 10, // 100 is default
                //    units: ' %',
                //    width: 39 // for adjusting arc thickness
                    },
                    color: {
                        pattern: ['#07578b', '#b1130e', '#F97600', '#F6C600'], // the three color levels for the percentage values.
                        threshold: {
                //            unit: 'value', // percentage is default
                //            max: 200, // 100 is default
                            values: [30, 60, 90, 100]
                        }
                    },
                    size: { height: 180 }
                }
      });



function turnOn_AquariumLight() 
{ 
  activateIFTTTWebhook("TurnOn_AquariumLight")
}
function turnOff_AquariumLight() 
{ 
  activateIFTTTWebhook("TurnOff_AquariumLight")
}
function turnOn_AquariumHeater() 
{ 
  activateIFTTTWebhook("TurnOn_AquariumHeater")
}
function turnOff_AquariumHeater() 
{ 
  activateIFTTTWebhook("TurnOff_AquariumHeater")
}
function turnOn_AquariumPump() 
{ 
  activateIFTTTWebhook("TurnOn_AquariumPump")
}
function turnOff_AquariumPump() 
{ 
  activateIFTTTWebhook("TurnOff_AquariumPump")
}

function activateIFTTTWebhook(eventName) 
{ 
  safelyPost("https://maker.ifttt.com/trigger/" + eventName + "/with/key/oTeQOlHZfifhve6QklqUz1PT9Xtt3VGgIfwN6Z3kM4T");
}
function safelyPost(url) 
{ 
  //TODO: deal with CORS properly later on
  try {     
    var request = new XMLHttpRequest();
    var params = "action=something";
    request.open('POST', url, true);
  //  request.onreadystatechange = function() {if (request.readyState==4) alert("It worked!");};
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // request.setRequestHeader("Content-length", params.length);
    // request.setRequestHeader("Connection", "close");
    request.send(params);


    // const response = fetch(url, {
    //   method: 'post',
    //   body: {
    //     // body
    //   }
    // });

    console.log('Completed!', response);
  } catch(err) {
    console.error('Error: ${err}');
  }
}