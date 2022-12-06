const archivedRouter = require('express').Router()
const handleArchive = require('../../controllers/archivedOrder')

archivedRouter.post('/', handleArchive.archiveOrder)

module.exports = archivedRouter;