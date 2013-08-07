var utils = require(WPATH('utils'));

var $model;

var args = arguments[0] || {};

// set the label text to the localized value of the "label" argument 
if (args.label) {
  $.form_label.text = L(args.label, args.label);  
}

exports.bindModel = function(model) {
  $model = model;
  if ($model && args.field) {
    $.form_text_textfield.value = $model.get(args.field);
  }
};

function textChanged(e) {
  if ($model && args.field) {
    $model.set(args.field, e.value);
  }
}
