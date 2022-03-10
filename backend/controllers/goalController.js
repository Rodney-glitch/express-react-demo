const asyncHandler = require('express-async-handler')

const getGoals = asyncHandler(async (req, res)=> {
    res.status(200).json({message: 'Goals'})
})

const createGoal = asyncHandler(async (req, res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please enter text')
    }
    res.status(201).json({message: 'Post Goals'})
})

const updateGoal = asyncHandler(async (req, res)=>{
    res.status(200).json({message: `Post Goals: ${req.params.id}`})
})

const deleteGoal = asyncHandler(async (req, res)=>{
    res.status(200).json({message: 'Post Goals'})
})

module.exports = {
    getGoals,
    createGoal,
    updateGoal,
    deleteGoal,
}


