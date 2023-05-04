const service = require('../services/service')
const express = require('express');
const router = express.Router();
const Film = require('../models/model');

router.get('/', async (req, res) => {
    try {
        const allFilms = await service.findAllFilms();
        res.json(allFilms);
    } catch (e) {
        res.json({message: e});
    }
})


router.get('/:author', async (req, res) => {
    try {
        const film = await service.findFilmsByAuthor(req.params.author)
        res.json(film);
    } catch (e) {
        res.json({message: e});
    }
})


router.post('/', async (req, res) => {
    const film = new Film({
        title: req.body.title,
        genre: req.body.genre,
        author: req.body.author,
        img: req.body.img
    });
    try {
        const addedFilm= await service.addNewFilm(film);
        res.json(addedFilm);
    } catch (e) {
        res.json({message: e});
    }
})


router.delete('/:_id', async (req, res) => {
    try {
        const deletedFilm = await service.deleteFilmById(req.params._id)
        res.json(deletedFilm);
    } catch (e) {
        res.json({message: e});
    }
})


router.patch('/:_id', async (req, res) => {
    try {
        const film = new Film({
            title: req.body.title,
            developer: req.body.developer,
            author: req.body.author,
            img: req.body.img
        });
        const updatedFilm = await service.updateFilm(req.params._id, film);
        res.json(updatedFilm);
    } catch (e) {
        res.json({message: e});
    }
})

module.exports = router;