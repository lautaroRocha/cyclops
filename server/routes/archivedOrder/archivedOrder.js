const archivedRouter = require('express').Router()
const handleArchive = require('../../controllers/archivedOrder')
const authenticateToken = require('../../middleware/authenticateToken')

archivedRouter.post('/', authenticateToken, handleArchive.archiveOrder)

module.exports = archivedRouter;