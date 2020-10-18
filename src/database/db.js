// import sqlite-async library
const Database = require("sqlite-async");

// function that creates the orphanage table in database
function execute(db) {
  return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );
    `);
}

// export db
module.exports = Database.open(__dirname + "/database.sqlite").then(execute);
