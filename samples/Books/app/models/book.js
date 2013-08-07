exports.definition = {
  config: {
    columns: {
      title: "TEXT",
      author: "TEXT",
      genre: "TEXT",
      published: "TEXT",
      modified: "TIMESTAMP",
      rating: "NUMBER",
      book_id: "INTEGER PRIMARY KEY AUTOINCREMENT"
    },
    adapter: {
      type: "sql",
      collection_name: "books",
      idAttribute: "book_id"
    }
  }
}
