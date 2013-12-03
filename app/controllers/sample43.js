var anim = require("alloy/animation");

var args = arguments[0] || {};

function checkdp(value) {
  var dpcheck = /([0-9]+)dp/;
  return value.replace(dpcheck, "$1");
}

function calcScale(basis, scale) {
  var num_basis = basis + 0;
  var num_scale = scale + 0;
  var rate = num_scale / num_basis;
  return rate;
}

function createScale2DMatrix(basisDimention, scaleDimention) {
  var t = Ti.UI.create2DMatrix();
  t = t.scale(scaleDimention.width / basisDimention.width,
              scaleDimention.height / basisDimention.height);
  return t;
}

function doClick() {
  var t1 = Ti.UI.create2DMatrix();
  t1 = t1.scale(calcScale(checkdp($.wrapView.width), checkdp("50dp")),
                1.0);

  var t2 = createScale2DMatrix({ width: checkdp($.wrapView.width), height: checkdp($.wrapView.height) },
                               { width: checkdp("50dp"), height: checkdp("50dp") });

  var animations = [
    Ti.UI.createAnimation({
      duration: 1000,
      anchorPoint: { x: 0, y: 0 },
      top: 200
    }),
    Ti.UI.createAnimation({
      duration: 1000,
      anchorPoint: { x: 0, y: 0 },
      transform: t1
    }),
    Ti.UI.createAnimation({
      duration: 1000,
      anchorPoint: { x: 0, y: 0 },
      left: 200,
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
