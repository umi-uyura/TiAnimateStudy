var anim = require("alloy/animation");

var args = arguments[0] || {};

function doClick() {
  var t1 = Ti.UI.create2DMatrix();
  t1 = t1.scale(0.5, 1.0);

  var t2 = Ti.UI.create2DMatrix();
  t2 = t2.scale(0.5, 0.5);
  
  var animations = [
    Ti.UI.createAnimation({
      duration: 1000,
      anchorPoint: { x: 0, y: 0 },
      transform: t1
    }),
    Ti.UI.createAnimation({
      duration: 1000,
      anchorPoint: { x: 0, y: 0 },
      transform: t2
    })
  ];
  anim.chainAnimate($.wrapView, animations, function() {
    alert("Finish!");
  });
}

$.baseWindow.setTitle(args.title);
