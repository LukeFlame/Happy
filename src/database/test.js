const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage.js');

Database.then(async db => {
    // insert data into table
    await saveOrphanage(db, {
        lat: "-23.5875873",
        lng: "-46.6597641",
        name: "Local dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "11927528374",
        images: [
            "https://images.unsplash.com/photo-1596443686812-2f45229eebc3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1563465814437-b1a057a461ed?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1595299462600-f1f42d4fae6f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas das 10h até as 22h",
        open_on_weekends: "0"
    });

    // consultar data
    const selectedOrphanages = await db.all(`SELECT * FROM orphanages`);
    console.log(selectedOrphanages);
    
    // consultar pelo id
    const orphanage = await db.all(`SELECT * FROM orphanages WHERE id = '1'`);
    console.log(orphanage);

    // delete data from table
    /* console.log(await db.run(`DELETE FROM orphanages WHERE id = "4"`)) */

})