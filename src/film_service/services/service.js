const dao = require('../daos/dao')

const findAllFilms = () => dao.findAllFilms()

const findFilmsByAuthor = (name) => dao.findFilmsByAuthor(name)
const addNewFilm = (newFilm) => dao.addNewFilm(newFilm)
const deleteFilmById = (id) => dao.deleteFilmById(id)
const updateFilm = (id, updatedFilm) => dao.updateFilm(id, updatedFilm);

module.exports = {
    findAllFilms,
    addNewFilm,
    deleteFilmById,
    updateFilm,
    findFilmsByAuthor
}
