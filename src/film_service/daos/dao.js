const model = require('../models/model')

const findAllFilms = () => model.find()
const findFilmsByAuthor = (author) => model.find({'author' : author});
const addNewFilm = (newFilm) => model.create(newFilm);
const deleteFilmById = (id) => model.findOneAndDelete({_id: id});
const updateFilm = (id, updatedFilm) => model.findOneAndUpdate({_id: id}, {
    $set: {
        title: updatedFilm.title,
        genre: updatedFilm.genre,
        author: updatedFilm.author,
        img : updatedFilm.img
    }},
    { new: true });

module.exports = {
    findAllFilms,
    addNewFilm,
    deleteFilmById,
    updateFilm,
    findFilmsByAuthor
}
