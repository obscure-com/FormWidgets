var $model;

var args = arguments[0] || {};

// set the label text to the localized value of the "label" argument 
if (args.label) {
  $.form_label.text = L(args.label, args.label);  
}

var snap = args.snapToInteger === "true";

$.form_slider_slider.min = parseFloat(args.min) || 0;
$.form_slider_slider.max = parseFloat(args.max) || 1;

exports.bindModel = function(model) {
  $model = model;
  if ($model && args.field) {
    $.form_slider_slider.value = $model.get(args.field);
  }
};

function sliderTouchEnded(e) {
  if (snap) {
    e.source.value = Math.round(e.source.value);
  }
  
  if ($model && args.field) {
    $model.set(args.field, e.source.value);
  }
}
