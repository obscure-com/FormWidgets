var $model;
var args = arguments[0] || {};
var containerHeight;
var parent = args['__parentSymbol'];

var collection = Alloy.Collections[args.sourceCollection];
if (!collection) {
  throw("Missing source collection '" + args.sourceCollection + "'");
}

collection.on('fetch', function() {
  var selectedRow = undefined;
  var val = $model && args.field ? $model.get(args.field) : undefined;
  
  var opts = collection.map(function(item) {
    return item.get(args.sourceField);
  });

  var dialog = Ti.UI.createOptionDialog({
    options: opts,
    selectedIndex: _.indexOf(opts, val)
  });
  
  dialog.addEventListener('click', function(e) {
    if (!e.cancel && $model && args.field) {
      this.hide();
      $model.set(args.field, opts[e.index]);
      refresh();
    }
  });
  
  dialog.show();
});

// set the label text to the localized value of the "label" argument 
if (args.label) {
  $.form_label.text = L(args.label, args.label);  
}

function refresh() {
  $.form_picker_label.text = $model && args.field ? $model.get(args.field) : '';
}

// exports

exports.bindModel = function(model) {
  $model = model;
  refresh();
};


// events

function focused(e) {
  parent && parent.trigger('com.obscure.forms:blur');
}

function togglePicker(e) {
  collection.fetch();
}
