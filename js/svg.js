const svgs=document.getElementById("svg-container").children;
const UA=window.navigator.userAgent;
const ua=(UA.indexOf('rv:11')+UA.indexOf('Firefox'))>=0;
const svgcount=document.getElementById('svg-container').childElementCount;
var styleArr=[];
var heightArr=[];
var navBar=document.getElementById('nav');
var conInfo=document.getElementById('content-info');
for(var i=0;i<svgcount;i++){
    styleArr[i] = {width:svgs[i].getAttribute('width'),height:svgs[i].getAttribute('height')}
}


window.onresize=function () 
{ 
    resvgstyle();
}; 

window.onload=function () 
{  
    resvgstyle(); 
}; 



function resvgstyle() {
    var sideWidth=0;
    for(var i=0;i<svgcount;i++){
        var oriWidth = styleArr[i].width;
        var oriHeight = styleArr[i].height;
        var percent = oriHeight / oriWidth;
        var innerWidth=document.body.offsetWidth-sideWidth;
        if (innerWidth <= oriWidth) {
            svgs[i].removeAttribute('width');
            svgs[i].removeAttribute('height');
            if (ua) {
                svgs[i].setAttribute('height',innerWidth*percent);
            }
        }else {
            svgs[i].setAttribute('width', oriWidth);
            svgs[i].setAttribute('height', oriHeight);
        }
    } 
}  