exports.definition = {
  config: {
    columns: {
      title: "TEXT",
      author: "TEXT",
      published: "TEXT",
      modified: "TIMESTAMP",
      book_id: "INTEGER PRIMARY KEY AUTOINCREMENT"
    },
    adapter: {
      type: "sql",
      collection_name: "books",
      idAttribute: "book_id"
    }
  }
}
