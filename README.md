# FormWidgets

FormWidgets are a set of [Alloy](https://github.com/appcelerator/alloy) widgets that
are useful for building cross-platform data entry forms in Titanium applications.  The
goal is to be able to build your forms in declarative Alloy view markup and have them
just work with your model objects.

*Current Status*: still under development, pulling in code from a previous iteration

## Example

See the `samples` directory for an example app.

### Configuration

Add the following declaration to your `config.json` file to enable the widget:

    "dependencies": {
      "com.obscure.forms": "1.0"
    }
  

### View Markup

    <Alloy>
      <Model id="model" src="myModel" instance="true"/>
      <ScrollView layout="vertical">
        <Widget src="com.obscure.forms" name="text" label="title" field="title"/>
        <Widget src="com.obscure.forms" name="date" label="published" field="published"/>
      </ScrollView>
      <Button onClick="save">Save</Button>
    </Alloy>

### Controller

At the moment, the form controller needs to explicitly set the model object for each
widget.  I'm working on making this easier.

    function windowOpened(e) {
      for (i in $.__views) {
        if (_.isFunction($.__views[i]['bindModel'])) {
          $.__views[i].bindModel($.model);
        }
      }
    }
    
    function save(e) {
      $.model.save();
    }
    
### Styling

Want green form labels?

    ".form_label": {
      color: '#008020'
    }

## Credits

FormWidgets uses many of Fokke Zandbergen's [tips and tricks](http://fokkezb.nl/2013/07/23/alloy-tips-tricks/). 