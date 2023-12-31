const router = require('express').Router()
const {
    getAllThoughts,
    askQuestion
} = require('../../controllers/merchantController')

// Queries for getting and adding thoughts
router.route('/')
    .get(getAllThoughts)
    .post(askQuestion)

// // Queries operating on a single thought
// router.route('/:thoughtId')
//     .get(getSingleThought)
//     .delete(deleteThought)
//     .put(updateThought)

// // Queries for adding and removing reactions to thoughts
// router.route('/:thoughtId/reactions')
//     .post(addReactionToThought)
//     .delete(delReactionFromThought)

module.exports = router