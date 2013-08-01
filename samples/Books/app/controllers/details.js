var args = arguments[0] || {};

// pass the model to the form widgets
// TODO make this easier somehow?
for (var i in $.__views) {
  var o = $.__views[i];
  o.__widgetId === 'com.obscure.forms' && o.setModel && o.setModel($model);
}

function doSave(e) {
  Ti.API.info($model.toJSON());
}

function doClose(e) {
  $.win.close();
}
