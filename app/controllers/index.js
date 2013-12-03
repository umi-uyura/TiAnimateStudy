function onClickTest(e) {
  var id = e.source.id;
  var args = {
    title: e.row.title
  };

  $.index.openWindow(Alloy.createController(id, args).getView(),
                     {animated: OS_IOS, swipeBack: false});
}

$.index.open();
