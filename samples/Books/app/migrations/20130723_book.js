var preload_data = [
  {title: 'To Kill a Mockingbird', author:'Harper Lee', published: '1960-07-11' },
  {title: 'The Catcher in the Rye', author:'J. D. Salinger', published: '1951-07-16' },
  {title: 'Of Mice and Men', author:'John Steinbeck', published: '1937-01-01' },
  {title: 'Lord of the Flies', author:'William Golding', published: '1954-11-17' },
  {title: 'The Great Gatsby', author:'F. Scott Fitzgerald', published: '1925-04-10' },
  {title: 'Animal Farm', author:'George Orwell', published: '1945-08-17' }
];
 
migration.up = function(migrator)
{
    migrator.createTable({
        "columns":
        {
            "book_id": "INTEGER PRIMARY KEY AUTOINCREMENT",
            "title": "TEXT",
            "author": "TEXT",
            "published": "TEXT",
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