var $model;
var args = arguments[0] || {};
var containerHeight;

var collection = Alloy.Collections[args.sourceCollection];
if (!collection) {
  throw("Missing source collection '" + args.sourceCollection + "'");
}

collection.on('fetch', function() {
  var selectedRow = undefined;
  var val = $model && args.field ? $model.get(args.field) : undefined;
  var col = Ti.UI.createPickerColumn();
  collection.forEach(function(item, i) {
    // TODO add a transform function for the source collection
    var row = Ti.UI.createPickerRow({
      title: item.get(args.sourceField)
    });
    col.addRow(row);
    if (val === item.get(args.sourceField)) {
      selectedRow = row;
    }
  });
  $.picker.setColumns([col]);
  $.picker.reloadColumn(col);
  if (selectedRow) {
    col.setSelectedRow(selectedRow);
  }
});

// set the label text to the localized value of the "label" argument 
if (args.label) {
  $.form_label.text = L(args.label, args.label);  
}

var postlayout = function(e) {
  containerHeight = e.source.size.height;
  e.source.removeEventListener('postlayout', postlayout);
}
$.container.addEventListener('postlayout', postlayout);

function refresh() {
  $.form_picker_label.text = $model && args.field ? $model.get(args.field) : '';
}

// exports

exports.bindModel = function(model) {
  $model = model;
  refresh();
};


// events

function pickerChange(e) {
  if ($model && args.field) {
    $model.set(args.field, e.selectedValue[0]);
    refresh();
  }
}

function togglePicker(e) {
  if ($.container.size.height == containerHeight) {
    collection.fetch();
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
