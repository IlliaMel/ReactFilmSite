const dao = require('../daos/dao')

const findAllUsers = () => dao.findAll()
const findUserById = (userId) => dao.findById(userId)
const findByUsername = (username) => dao.findByUsername(username)
const addOneUser = (newBook) => dao.addOne(newBook)
const updateOneUser = (id, updatedUser) => dao.updateOne(id, updatedUser)
const deleteOneUser = (id) => dao.deleteOne(id)

module.exports = {
    findAllUsers,
    findUserById,
    findByUsername,
    addOneUser,
    updateOneUser,
    deleteOneUser
}
