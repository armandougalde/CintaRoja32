//Peliculas

const express = require("express");
//leer sobre body parser
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const MONGOURI = require("./config/keys").mongoUri;
const PORT = process.env.PORT||3000;
const app = express();

const router = require("./routes/routes");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
mongoose.connect(MONGOURI)
    .then(() => console.log('Mongo Connected'))
    .catch((err) => console.log(err));

app.use('/', router);
app.listen(PORT, () => {
    console.log(`servidor corriendo${PORT}`)

});



