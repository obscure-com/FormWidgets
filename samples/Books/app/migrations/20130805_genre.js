var preload_data = [
  { name: 'fiction' },
  { name: 'drama' },
  { name: 'fable' },
  { name: 'fairy tale' },
  { name: 'fantasy' },
  { name: 'folklore' },
  { name: 'historical fiction' },
  { name: 'horror' },
  { name: 'humor' },
  { name: 'legend' },
  { name: 'mystery' },
  { name: 'allegory' },
  { name: 'mythology' },
  { name: 'poetry' },
  { name: 'science fiction' },
  { name: 'short story' },
  { name: 'biography' },
  { name: 'essay' },
  { name: 'narrative' },
  { name: 'speech' },
  { name: 'textbook' },
  { name: 'young adult' }
];
 
migration.up = function(migrator)
{
    migrator.createTable({
        "columns":
        {
            "genre_id": "INTEGER PRIMARY KEY AUTOINCREMENT",
            "name": "TEXT"
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