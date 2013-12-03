function Controller() {
    function onClickTest(e) {
        var id = e.source.id;
        var args = {
            title: e.row.title
        };
        $.index.openWindow(Alloy.createController(id, args).getView(), {
            animated: false,
            swipeBack: false
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId1 = Ti.UI.createWindow({
        backgroundColor: "white",
        exitOnClose: true,
        navBarHidden: false,
        title: "TiAnimateStudy",
        id: "__alloyId1"
    });
    $.__views.__alloyId2 = Ti.UI.createTableViewSection({
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        headerTitle: "Movement",
        id: "__alloyId2"
    });
    var __alloyId3 = [];
    __alloyId3.push($.__views.__alloyId2);
    $.__views.sample01 = Ti.UI.createTableViewRow({
        font: {
            fontSize: "20dp"
        },
        id: "sample01",
        title: "Top to Bottom"
    });
    $.__views.__alloyId2.add($.__views.sample01);
    onClickTest ? $.__views.sample01.addEventListener("click", onClickTest) : __defers["$.__views.sample01!click!onClickTest"] = true;
    $.__views.sample02 = Ti.UI.createTableViewRow({
        font: {
            fontSize: "20dp"
        },
        id: "sample02",
        title: "Left to Right"
    });
    $.__views.__alloyId2.add($.__views.sample02);
    onClickTest ? $.__views.sample02.addEventListener("click", onClickTest) : __defers["$.__views.sample02!click!onClickTest"] = true;
    $.__views.sample03 = Ti.UI.createTableViewRow({
        font: {
            fontSize: "20dp"
        },
        id: "sample03",
        title: "Top to Bottom, Left to Right"
    });
    $.__views.__alloyId2.add($.__views.sample03);
    onClickTest ? $.__views.sample03.addEventListener("click", onClickTest) : __defers["$.__views.sample03!click!onClickTest"] = true;
    $.__views.sample04 = Ti.UI.createTableViewRow({
        font: {
            fontSize: "20dp"
        },
        id: "sample04",
        title: "Top to Bottom & Left to Right"
    });
    $.__views.__alloyId2.add($.__views.sample04);
    onClickTest ? $.__views.sample04.addEventListener("click", onClickTest) : __defers["$.__views.sample04!click!onClickTest"] = true;
    $.__views.__alloyId4 = Ti.UI.createTableViewSection({
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        headerTitle: "Movement with Border",
        id: "__alloyId4"
    });
    __alloyId3.push($.__views.__alloyId4);
    $.__views.sample11 = Ti.UI.createTableViewRow({
        font: {
            fontSize: "20dp"
        },
        id: "sample11",
        title: "Top to Bottom"
    });
    $.__views.__alloyId4.add($.__views.sample11);
    onClickTest ? $.__views.sample11.addEventListener("click", onClickTest) : __defers["$.__views.sample11!click!onClickTest"] = true;
    $.__views.sample12 = Ti.UI.createTableViewRow({
        font: {
            fontSize: "20dp"
        },
        id: "sample12",
        title: "Top to Bottom (for Android)"
    });
    $.__views.__alloyId4.add($.__views.sample12);
    onClickTest ? $.__views.sample12.addEventListener("click", onClickTest) : __defers["$.__views.sample12!click!onClickTest"] = true;
    $.__views.sample13 = Ti.UI.createTableViewRow({
        font: {
            fontSize: "20dp"
        },
        id: "sample13",
        title: "Top to Bottom, Left to Right (for Android)"
    });
    $.__views.__alloyId4.add($.__views.sample13);
    onClickTest ? $.__views.sample13.addEventListener("click", onClickTest) : __defers["$.__views.sample13!click!onClickTest"] = true;
    $.__views.sample14 = Ti.UI.createTableViewRow({
        font: {
            fontSize: "20dp"
        },
        id: "sample14",
        title: "Top to Bottom & Left to Right (for Android)"
    });
    $.__views.__alloyId4.add($.__views.sample14);
    onClickTest ? $.__views.sample14.addEventListener("click", onClickTest) : __defers["$.__views.sample14!click!onClickTest"] = true;
    $.__views.__alloyId5 = Ti.UI.createTableViewSection({
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        headerTitle: "Transformation",
        id: "__alloyId5"
    });
    __alloyId3.push($.__views.__alloyId5);
    $.__views.sample21 = Ti.UI.createTableViewRow({
        font: {
            fontSize: "20dp"
        },
        id: "sample21",
        title: "Shrink width"
    });
    $.__views.__alloyId5.add($.__views.sample21);
    onClickTest ? $.__views.sample21.addEventListener("click", onClickTest) : __defers["$.__views.sample21!click!onClickTest"] = true;
    $.__views.sample22 = Ti.UI.createTableViewRow({
        font: {
            fontSize: "20dp"
        },
        id: "sample22",
        title: "Shrink height"
    });
    $.__views.__alloyId5.add($.__views.sample22);
    onClickTest ? $.__views.sample22.addEventListener("click", onClickTest) : __defers["$.__views.sample22!click!onClickTest"] = true;
    $.__views.sample23 = Ti.UI.createTableViewRow({
        font: {
            fontSize: "20dp"
        },
        id: "sample23",
        title: "Shrink width, height"
    });
    $.__views.__alloyId5.add($.__views.sample23);
    onClickTest ? $.__views.sample23.addEventListener("click", onClickTest) : __defers["$.__views.sample23!click!onClickTest"] = true;
    $.__views.sample24 = Ti.UI.createTableViewRow({
        font: {
            fontSize: "20dp"
        },
        id: "sample24",
        title: "Shrink width & height"
    });
    $.__views.__alloyId5.add($.__views.sample24);
    onClickTest ? $.__views.sample24.addEventListener("click", onClickTest) : __defers["$.__views.sample24!click!onClickTest"] = true;
    $.__views.__alloyId6 = Ti.UI.createTableViewSection({
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        headerTitle: "Transformation with Border",
        id: "__alloyId6"
    });
    __alloyId3.push($.__views.__alloyId6);
    $.__views.sample31 = Ti.UI.createTableViewRow({
        font: {
            fontSize: "20dp"
        },
        id: "sample31",
        title: "Shrink width"
    });
    $.__views.__alloyId6.add($.__views.sample31);
    onClickTest ? $.__views.sample31.addEventListener("click", onClickTest) : __defers["$.__views.sample31!click!onClickTest"] = true;
    $.__views.sample32 = Ti.UI.createTableViewRow({
        font: {
            fontSize: "20dp"
        },
        id: "sample32",
        title: "Shrink width (for Android)"
    });
    $.__views.__alloyId6.add($.__views.sample32);
    onClickTest ? $.__views.sample32.addEventListener("click", onClickTest) : __defers["$.__views.sample32!click!onClickTest"] = true;
    $.__views.sample33 = Ti.UI.createTableViewRow({
        font: {
            fontSize: "20dp"
        },
        id: "sample33",
        title: "Shrink width with left (for Android)"
    });
    $.__views.__alloyId6.add($.__views.sample33);
    onClickTest ? $.__views.sample33.addEventListener("click", onClickTest) : __defers["$.__views.sample33!click!onClickTest"] = true;
    $.__views.sample34 = Ti.UI.createTableViewRow({
        font: {
            fontSize: "20dp"
        },
        id: "sample34",
        title: "Shrink width with left & anchor point (for Android)"
    });
    $.__views.__alloyId6.add($.__views.sample34);
    onClickTest ? $.__views.sample34.addEventListener("click", onClickTest) : __defers["$.__views.sample34!click!onClickTest"] = true;
    $.__views.sample35 = Ti.UI.createTableViewRow({
        font: {
            fontSize: "20dp"
        },
        id: "sample35",
        title: "Shrink width by 2DMatrix (for Android)"
    });
    $.__views.__alloyId6.add($.__views.sample35);
    onClickTest ? $.__views.sample35.addEventListener("click", onClickTest) : __defers["$.__views.sample35!click!onClickTest"] = true;
    $.__views.sample36 = Ti.UI.createTableViewRow({
        font: {
            fontSize: "20dp"
        },
        id: "sample36",
        title: "Shrink width by 2DMatrix"
    });
    $.__views.__alloyId6.add($.__views.sample36);
    onClickTest ? $.__views.sample36.addEventListener("click", onClickTest) : __defers["$.__views.sample36!click!onClickTest"] = true;
    $.__views.sample37 = Ti.UI.createTableViewRow({
        font: {
            fontSize: "20dp"
        },
        id: "sample37",
        title: "Shrink width by 2DMatrix with anchorPoint (for Android)"
    });
    $.__views.__alloyId6.add($.__views.sample37);
    onClickTest ? $.__views.sample37.addEventListener("click", onClickTest) : __defers["$.__views.sample37!click!onClickTest"] = true;
    $.__views.sample38 = Ti.UI.createTableViewRow({
        font: {
            fontSize: "20dp"
        },
        id: "sample38",
        title: "Shrink width, height by 2DMatrix with anchorPoint (for Android)"
    });
    $.__views.__alloyId6.add($.__views.sample38);
    onClickTest ? $.__views.sample38.addEventListener("click", onClickTest) : __defers["$.__views.sample38!click!onClickTest"] = true;
    $.__views.sample39 = Ti.UI.createTableViewRow({
        font: {
            fontSize: "20dp"
        },
        id: "sample39",
        title: "Shrink width, height by Utils module"
    });
    $.__views.__alloyId6.add($.__views.sample39);
    onClickTest ? $.__views.sample39.addEventListener("click", onClickTest) : __defers["$.__views.sample39!click!onClickTest"] = true;
    $.__views.__alloyId7 = Ti.UI.createTableViewSection({
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        headerTitle: "Movement & Transformation",
        id: "__alloyId7"
    });
    __alloyId3.push($.__views.__alloyId7);
    $.__views.sample41 = Ti.UI.createTableViewRow({
        font: {
            fontSize: "20dp"
        },
        id: "sample41",
        title: "Top to Bottom & Shrink width"
    });
    $.__views.__alloyId7.add($.__views.sample41);
    onClickTest ? $.__views.sample41.addEventListener("click", onClickTest) : __defers["$.__views.sample41!click!onClickTest"] = true;
    $.__views.sample42 = Ti.UI.createTableViewRow({
        font: {
            fontSize: "20dp"
        },
        id: "sample42",
        title: "Top to Bottom & Shrink width, Left to Right & Shrink height"
    });
    $.__views.__alloyId7.add($.__views.sample42);
    onClickTest ? $.__views.sample42.addEventListener("click", onClickTest) : __defers["$.__views.sample42!click!onClickTest"] = true;
    $.__views.sample43 = Ti.UI.createTableViewRow({
        font: {
            fontSize: "20dp"
        },
        id: "sample43",
        title: "Top to Bottom & Shrink width, Left to Right & Shrink height with Border (for Android)"
    });
    $.__views.__alloyId7.add($.__views.sample43);
    onClickTest ? $.__views.sample43.addEventListener("click", onClickTest) : __defers["$.__views.sample43!click!onClickTest"] = true;
    $.__views.sample44 = Ti.UI.createTableViewRow({
        font: {
            fontSize: "20dp"
        },
        id: "sample44",
        title: "Shrink width & Top to Bottom, Shrink height & Left to Right with Border (for Android)"
    });
    $.__views.__alloyId7.add($.__views.sample44);
    onClickTest ? $.__views.sample44.addEventListener("click", onClickTest) : __defers["$.__views.sample44!click!onClickTest"] = true;
    $.__views.sample45 = Ti.UI.createTableViewRow({
        font: {
            fontSize: "20dp"
        },
        id: "sample45",
        title: "Top to Bottom & Shrink width, Left to Right & Shrink height with Border & size (for Android)"
    });
    $.__views.__alloyId7.add($.__views.sample45);
    onClickTest ? $.__views.sample45.addEventListener("click", onClickTest) : __defers["$.__views.sample45!click!onClickTest"] = true;
    $.__views.sample46 = Ti.UI.createTableViewRow({
        font: {
            fontSize: "20dp"
        },
        id: "sample46",
        title: "Shrink width & Top to Bottom, Shrink height & Left to Right with Border & size  (for Android)"
    });
    $.__views.__alloyId7.add($.__views.sample46);
    onClickTest ? $.__views.sample46.addEventListener("click", onClickTest) : __defers["$.__views.sample46!click!onClickTest"] = true;
    $.__views.sampleList = Ti.UI.createTableView({
        data: __alloyId3,
        id: "sampleList"
    });
    $.__views.__alloyId1.add($.__views.sampleList);
    $.__views.index = require("xp.ui").createNavigationWindow({
        window: $.__views.__alloyId1,
        module: "xp.ui",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.sample01!click!onClickTest"] && $.__views.sample01.addEventListener("click", onClickTest);
    __defers["$.__views.sample02!click!onClickTest"] && $.__views.sample02.addEventListener("click", onClickTest);
    __defers["$.__views.sample03!click!onClickTest"] && $.__views.sample03.addEventListener("click", onClickTest);
    __defers["$.__views.sample04!click!onClickTest"] && $.__views.sample04.addEventListener("click", onClickTest);
    __defers["$.__views.sample11!click!onClickTest"] && $.__views.sample11.addEventListener("click", onClickTest);
    __defers["$.__views.sample12!click!onClickTest"] && $.__views.sample12.addEventListener("click", onClickTest);
    __defers["$.__views.sample13!click!onClickTest"] && $.__views.sample13.addEventListener("click", onClickTest);
    __defers["$.__views.sample14!click!onClickTest"] && $.__views.sample14.addEventListener("click", onClickTest);
    __defers["$.__views.sample21!click!onClickTest"] && $.__views.sample21.addEventListener("click", onClickTest);
    __defers["$.__views.sample22!click!onClickTest"] && $.__views.sample22.addEventListener("click", onClickTest);
    __defers["$.__views.sample23!click!onClickTest"] && $.__views.sample23.addEventListener("click", onClickTest);
    __defers["$.__views.sample24!click!onClickTest"] && $.__views.sample24.addEventListener("click", onClickTest);
    __defers["$.__views.sample31!click!onClickTest"] && $.__views.sample31.addEventListener("click", onClickTest);
    __defers["$.__views.sample32!click!onClickTest"] && $.__views.sample32.addEventListener("click", onClickTest);
    __defers["$.__views.sample33!click!onClickTest"] && $.__views.sample33.addEventListener("click", onClickTest);
    __defers["$.__views.sample34!click!onClickTest"] && $.__views.sample34.addEventListener("click", onClickTest);
    __defers["$.__views.sample35!click!onClickTest"] && $.__views.sample35.addEventListener("click", onClickTest);
    __defers["$.__views.sample36!click!onClickTest"] && $.__views.sample36.addEventListener("click", onClickTest);
    __defers["$.__views.sample37!click!onClickTest"] && $.__views.sample37.addEventListener("click", onClickTest);
    __defers["$.__views.sample38!click!onClickTest"] && $.__views.sample38.addEventListener("click", onClickTest);
    __defers["$.__views.sample39!click!onClickTest"] && $.__views.sample39.addEventListener("click", onClickTest);
    __defers["$.__views.sample41!click!onClickTest"] && $.__views.sample41.addEventListener("click", onClickTest);
    __defers["$.__views.sample42!click!onClickTest"] && $.__views.sample42.addEventListener("click", onClickTest);
    __defers["$.__views.sample43!click!onClickTest"] && $.__views.sample43.addEventListener("click", onClickTest);
    __defers["$.__views.sample44!click!onClickTest"] && $.__views.sample44.addEventListener("click", onClickTest);
    __defers["$.__views.sample45!click!onClickTest"] && $.__views.sample45.addEventListener("click", onClickTest);
    __defers["$.__views.sample46!click!onClickTest"] && $.__views.sample46.addEventListener("click", onClickTest);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;