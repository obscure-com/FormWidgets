
$.index.open();

// Trigger the synchronization
var library = Alloy.Collections.book;
library.fetch();
 
// Free model-view data binding resources when this view-controller closes
$.index.addEventListener('close', function() {
    $.destroy();
});

function showDetails(e) {
  var detailsController = Alloy.createController('details', {
    $model: library.get(e.rowData.book_id)
  });
  detailsController.getView().open({ modal: true });
}
