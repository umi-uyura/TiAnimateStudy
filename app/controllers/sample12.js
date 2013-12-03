var anim = require("alloy/animation");

var args = arguments[0] || {};

function doClick() {
  var animations = [
    Ti.UI.createAnimation({
      duration: 1000,
      top: 200
    })
  ];
  anim.chainAnimate($.wrapView, animations, function() {
    alert("Finish!");
  });
}

$.baseWindow.setTitle(args.title);
