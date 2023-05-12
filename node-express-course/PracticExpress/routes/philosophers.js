const express = require('express')
const router = express.Router()

const {
    getThinkers,
    getThinker,
    createThinker,
    updateThinker,
    deleteThinker
} = require('../controllers/thinker')

router.get('/api/philosophers', getThinkers)

router.get('/api/philosophers/:id', getThinker)

router.post('/api/philosophers/:id', createThinker)

router.put('/api/philosophers/:id', updateThinker)

router.delete('/api/philosophers/:id', deleteThinker)

module.exports = router