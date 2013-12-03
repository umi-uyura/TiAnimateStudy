var anim = require("alloy/animation");

var args = arguments[0] || {};

function doClick() {
  var animations = [
    Ti.UI.createAnimation({
      duration: 1000,
      width: "50dp"
    }),
    Ti.UI.createAnimation({
      duration: 1000,
      height: "50dp"
    })
  ];
  anim.chainAnimate($.imgView, animations, function() {
    alert("Finish!");
  });
}

$.baseWindow.setTitle(args.title);
