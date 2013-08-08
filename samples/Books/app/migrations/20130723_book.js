var preload_data = [
  {title: 'To Kill a Mockingbird', author:'Harper Lee', genre: 'fiction', published: '1960-07-11', read: true },
  {title: 'The Catcher in the Rye', author:'J. D. Salinger', genre: 'young adult', published: '1951-07-16', read: false },
  {title: 'Of Mice and Men', author:'John Steinbeck', genre: 'fiction', published: '1937-01-01', rating: 4 },
  {title: 'Lord of the Flies', author:'William Golding', genre: 'allegory', published: '1954-11-17' },
  {title: 'The Great Gatsby', author:'F. Scott Fitzgerald', published: '1925-04-10', read: true },
  {title: 'Animal Farm', author:'George Orwell', genre: 'satire', published: '1945-08-17', rating: 3 }
];
 
migration.up = function(migrator)
{
    migrator.createTable({
        "columns":
        {
            "book_id": "INTEGER PRIMARY KEY AUTOINCREMENT",
            "title": "TEXT",
            "author": "TEXT",
            "genre": "TEXT",
            "published": "TEXT",
            "rating": "NUMBER DEFAULT 0",
            "read": "NUMBER DEFAULT 0",
            "modified": "TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
        }
    });
    for (var i = 0; i < preload_data.length; i++) { 
      migrator.insertRow(preload_data[i]);
    }
};
 
migration.down = function(migrator)
{
    migrator.dropTable();
};