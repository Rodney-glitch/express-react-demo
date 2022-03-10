const express = require('express')
const {getGoals, createGoal, updateGoal, deleteGoal} = require("../controllers/goalController");
const router = express.Router()


router.route('/').get(getGoals).post(createGoal)

router.route('/:id').put(updateGoal).delete(deleteGoal)

// router.get('/', getGoals)
// router.post('/', createGoal)
// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)

module.exports = router