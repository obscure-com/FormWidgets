
$.index.open();

function windowOpened(e) {
  $.library.fetch();
}

function showDetails(e) {
  var detailsController = Alloy.createController('details', {
    $model: $.library.get(e.rowData.book_id)
  });
  detailsController.getView().open({ modal: true });
}
