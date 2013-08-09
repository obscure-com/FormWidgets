var moment = require(WPATH('moment'));

var $model;
var args = arguments[0] || {};
var containerHeight;

// set the label text to the localized value of the "label" argument 
if (args.label) {
  $.form_label.text = L(args.label, args.label);  
}

var postlayout = function(e) {
  containerHeight = e.source.size.height;
  e.source.removeEventListener('postlayout', postlayout);
}
$.container.addEventListener('postlayout', postlayout);

var display = args.display || 'calendar';
var withtime = args.time === 'true';

$.picker.type = withtime ? Ti.UI.PICKER_TYPE_DATE_AND_TIME : Ti.UI.PICKER_TYPE_DATE;

// TODO minDate, maxDate, minuteInterval, 

function refresh() {
  if ($model && args.field) {
    var m = moment($model.get(args.field), args.parse);
    if (m && m.isValid()) {
      if (display === 'calendar') {
        $.form_date_label.text = m.calendar();
      }
      else {
        $.form_date_label.text = m.format(display);
      }
      $.picker.value = m.toDate();
    }
  }
}

// exports

exports.bindModel = function(model) {
  $model = model;
  refresh();
};


// events

function pickerChange(e) {
  if ($model && args.field) {
    $model.set(args.field, e.value);
    refresh();
  }
}

function toggleDatePicker(e) {
  if ($.container.size.height == containerHeight) {
    $.container.animate({
      height: containerHeight + $.drawer.size.height + 8,
      duration: 200,
    });
  }
  else {
    $.container.animate({
      height: containerHeight,
      duration: 200,
    });
  }
}

