function Controller() {
    function doClick() {
        var t = Ti.UI.create2DMatrix();
        t = t.scale(.5);
        var animations = [ Ti.UI.createAnimation({
            duration: 1e3,
            transform: t
        }) ];
        anim.chainAnimate($.wrapView, animations, function() {
            alert("Finish!");
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "sample35";
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
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
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