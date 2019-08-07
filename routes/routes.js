//usar nodemon para levantar en automatico el express

//parametros necesarios para  arrancar
const express = require("express");
const router = express.Router();

const { Movie } = require("../models/movies");

router.get("/", (req, res) => {

    res.status(200).send({ response: "corriendo" });
});

//Metodo
router.post("/api/v1/pelicula", (req, res) => {

    const { title, year, description, image, theme, director } = req.body;
    const newMovie = Movie({

        title,
        year,
        description,
        image,
        theme,
        director
    });

    newMovie.save((err, pelicula) => {
        err ? res.status(409).send(err) : res.status(201).send(pelicula)
    });
    // res.status(200).send({response: "primer post"});

});

router.get("/api/v1/pelicula", (req, res) => {
    const { q } = req.query;
    Movie.find({ title: q }).exec()
        .then(movie => {

            movie.length > 0 ? res.status(200).send(movie) : res.status(400).send("Not found")


        });


});
router.get("/api/v1/peliculaById/", (req, res) => {
    const { id } = req.query;
    Movie.findById(id).exec()
        .then(movies => res.status(200).send(movies))
        .catch(err => res.status(404).send(err));
});


router.get('/', (req, res) => {

    const { q } = req.query;
    Movie.find({ title: q }).exec()
        .then(movie => {

            movie.length > 0 ? res.status(200).send(movie) : res.status(400).send("Not found")


        })
        .catch(err => res.status(404).send(err));

});


router.put("/api/v1/pelicula/update", (req, res) => {
    const { id } = req.query;
    const body = req.body;
    console.log(id);
    console.log(body);
    Movie.findByIdAndUpdate(id, { $set: body }, { new: true })
        .then(newMovie => {


            if (newMovie !== null) {

                res.status(202).send(newMovie)

            } else {
                res.status(404).send("err")

            }
        }).catch(err => res.status(404).send(err))

});


router.delete("/api/v1/peliculas/delete", (req, res) => {

    const { id } = req.query;
    Movie.findByIdAndDelete(id).exec()
        .then(pelicula => {
            pelicula !== null 
            ? res.status(200).send({ mensaje: " eliminado", body: pelicula })
            : res.status(304).send({ mensaje: "eliminado" })
            
    

    }).catch(err => res.status(304).send({ mensajde: "no eliminado" }))

});

module.exports = router;
