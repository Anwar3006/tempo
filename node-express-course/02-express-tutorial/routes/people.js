const express = require('express')
const router = express.Router()

const  {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
} = require('../controllers/people')

/**
 * can use the below code
 */
// router.get('/', getPeople);
// router.post('/', createPerson);
router.post('/postman', createPersonPostman);
router.put('/:personID', updatePerson);
router.delete('/:personID', deletePerson);


/**
 * or this code if you have multiple urls that match
 */
router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPersonPostman);
router.route('/:personID').put(updatePerson).delete(deletePerson)

module.exports = router