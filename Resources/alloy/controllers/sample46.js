function Controller() {
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
        t = t.scale(scaleDimention.width / basisDimention.width, scaleDimention.height / basisDimention.height);
        return t;
    }
    function doClick() {
        var t1 = Ti.UI.create2DMatrix();
        t1 = t1.scale(calcScale(checkdp($.wrapView.width), checkdp("50dp")), 1);
        var t2 = createScale2DMatrix({
            width: checkdp($.wrapView.width),
            height: checkdp($.wrapView.height)
        }, {
            width: checkdp("50dp"),
            height: checkdp("50dp")
        });
        var animations = [ Ti.UI.createAnimation({
            duration: 1e3,
            anchorPoint: {
                x: 0,
                y: 0
            },
            transform: t1
        }), Ti.UI.createAnimation({
            duration: 1e3,
            anchorPoint: {
                x: 0,
                y: 0
            },
            top: 200,
            tramsform: t1
        }), Ti.UI.createAnimation({
            duration: 1e3,
            anchorPoint: {
                x: 0,
                y: 0
            },
            transform: t2
        }), Ti.UI.createAnimation({
            duration: 1e3,
            anchorPoint: {
                x: 0,
                y: 0
            },
            left: 200,
            transform: t2
        }) ];
        anim.chainAnimate($.wrapView, animations, function() {
            alert("Finish!");
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "sample46";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.baseWindow = Ti.UI.createWindow({
        backgroundColor: "white",
        exitOnClose: false,
        navBarHidden: false,
        id: "baseWindow"
    });
    $.__views.baseWindow && $.addTopLevelView($.__views.baseWindow);
    $.__views.canvasView = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        backgroundColor: "green",
        id: "canvasView"
    });
    $.__views.baseWindow.add($.__views.canvasView);
    $.__views.wrapView = Ti.UI.createView({
        width: "100dp",
        height: "100dp",
        top: 10,
        left: 10,
        backgroundColor: "yellow",
        id: "wrapView"
    });
    $.__views.canvasView.add($.__views.wrapView);
    $.__views.imgView = Ti.UI.createImageView({
        width: "100dp",
        height: "100dp",
        backgroundColor: "blue",
        borderWidth: 5,
        borderRadius: 10,
        borderColor: "red",
        image: "/appicon.png",
        id: "imgView"
    });
    $.__views.wrapView.add($.__views.imgView);
    doClick ? $.__views.imgView.addEventListener("click", doClick) : __defers["$.__views.imgView!click!doClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var anim = require("alloy/animation");
    var args = arguments[0] || {};
    $.baseWindow.setTitle(args.title);
    __defers["$.__views.imgView!click!doClick"] && $.__views.imgView.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;