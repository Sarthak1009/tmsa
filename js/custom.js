var g = getElementByClassName('white-right');
var h = getElementByClassName('srvclr');

(function(){
 getElementByClassName('white-right').mouseover(function() {
    getElementByClassName('srvclr').color = "red";
  });
}());
