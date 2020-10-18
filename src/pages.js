// import db.js archive
const Database = require("./database/db.js");
// import function saveOrphanage
const saveOrphanage = require("./database/saveOrphanage.js");

module.exports = {
  // render index page
  index(req, res) {
    return res.render("index");
  },
  // render orphanage page
  async orphanage(req, res) {
    // take id
    const id = req.query.id;

    try {
      // collects the data from the orphanage according to the id
      const db = await Database;
      const results = await db.all(
        `SELECT * FROM orphanages WHERE id = '${id}'`
      );
      orphanage = results[0];

      // formats and provides image links
      orphanage.images = orphanage.images.split(",");
      orphanage.firstImage = orphanage.images[0];

      // translates the '1' or '0' of the form to true or false
      orphanage.open_on_weekends == "0"
        ? (orphanage.open_on_weekends = false)
        : (orphanage.open_on_weekends = true);

      return res.render("orphanage", { orphanage });
    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados");
    }
  },
  // render the orphanages page
  async orphanages(req, res) {
    try {
      // collect all orphanages and render
      const db = await Database;
      const orphanages = await db.all(`SELECT * FROM orphanages`);
      return res.render("orphanages", { orphanages });
    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados.");
    }
  },
  // render create orphanage page
  createOrphanage(req, res) {
    return res.render("create-orphanage");
  },
  // collect data from form
  async saveOrphanage(req, res) {
    const fields = req.body;
    console.log(fields);

    // validate that all fields are filled
    if (Object.values(fields).includes("")) {
      return res.send("Todos os campos devem ser preenchidos!");
    }

    try {
      // save the orphanage
      const db = await Database;
      await saveOrphanage(db, {
        lat: fields.lat,
        lng: fields.lng,
        name: fields.name,
        about: fields.about,
        whatsapp: fields.whatsapp,
        images: fields.images.toString(),
        instructions: fields.instructions,
        opening_hours: fields.opening_hours,
        open_on_weekends: fields.open_on_weekends,
      });

      // redirect
      return res.redirect("./orphanages");
    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados");
    }
  },
};
