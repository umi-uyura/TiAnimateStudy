function Controller() {
    function doClick() {
        var animations = [ Ti.UI.createAnimation({
            duration: 1e3,
            top: 200,
            left: 200
        }) ];
        anim.chainAnimate($.boxView, animations, function() {
            alert("Finish!");
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "sample04";
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
    $.__views.boxView = Ti.UI.createView({
        width: "100dp",
        height: "100dp",
        top: 10,
        left: 10,
        backgroundColor: "blue",
        id: "boxView"
    });
    $.__views.canvasView.add($.__views.boxView);
    doClick ? $.__views.boxView.addEventListener("click", doClick) : __defers["$.__views.boxView!click!doClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var anim = require("alloy/animation");
    var args = arguments[0] || {};
    $.baseWindow.setTitle(args.title);
    __defers["$.__views.boxView!click!doClick"] && $.__views.boxView.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;