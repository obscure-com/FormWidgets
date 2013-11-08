var args = arguments[0] || {};

function windowOpened(e) {
  // bind the model to the form widgets
  // TODO make this easier somehow?
  for (i in $.__views) {
    if (_.isFunction($.__views[i]['bindModel'])) {
      $.__views[i].bindModel($model);
    }
  }
}

function doSave(e) {
  Ti.API.info($model.toJSON());
}

function doClose(e) {
  $.details.close();
}
