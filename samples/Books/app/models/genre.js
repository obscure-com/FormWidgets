exports.definition = {
  config: {
    columns: {
      name: "TEXT",
      genre_id: "INTEGER PRIMARY KEY AUTOINCREMENT"
    },
    adapter: {
      type: "sql",
      collection_name: "genres",
      idAttribute: "genre_id"
    }
  },
  
  extendCollection: function(Collection) {
    _.extend(Collection.prototype, {
      // sort genres by name
      comparator : function(item) {
        return item.get('name');
      }
    });
    
    return Collection;    
  }
}
