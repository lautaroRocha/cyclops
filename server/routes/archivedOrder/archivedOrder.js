const archivedRouter = require('express').Router()
const handleArchive = require('../../controllers/archivedOrder')
const authenticateToken = require('../../middleware/authenticateToken')

archivedRouter.post('/', authenticateToken, handleArchive.archiveOrder)

archivedRouter.get('/', authenticateToken, handleArchive.getArchive)


module.exports = archivedRouter;