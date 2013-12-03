var anim = require("alloy/animation");

var args = arguments[0] || {};

function doClick() {
  var t = Ti.UI.create2DMatrix();
  t = t.scale(0.5);
  
  var animations = [
    Ti.UI.createAnimation({
      duration: 1000,
      anchorPoint: { x: 0, y: 0 },
      transform: t
    })
  ];
  anim.chainAnimate($.wrapView, animations, function() {
    alert("Finish!");
  });
}

$.baseWindow.setTitle(args.title);
