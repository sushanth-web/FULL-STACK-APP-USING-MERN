const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

//get all workouts
exports.getWorkouts = async(req,res)=> {
    const user_id = req.user._id
    const workouts = await Workout.find({user_id}).sort({createdAt:-1})

    if(!workouts)
        return res.status(400).json({error : "No entries Found"})
    res.status(200).json(workouts)
}

//get a single workout by id
exports.getWorkout = async(req,res)=> {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "No such workout"})
    }

    const workout = await Workout.findById(id)
    if(!workout)
        return res.status(404).json({error: "No such workout"})

    res.status(200).json(workout)
}

//add a workout
exports.createWorkout = async(req,res) => {

    const {title,load,reps} = req.body
    
    try{
        const user_id = req.user._id
        const workout = await Workout.create({title,load,reps,user_id})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

//delete a workout
exports.deleteWorkout = async(req,res) => {
    const {id} = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "No such workout"})
    }

    const workout = await Workout.findOneAndDelete({_id:id})

    if(!workout)
        return res.status(404).json({error: "No such workout"})

    res.status(200).json(workout)
}

//update a workout
exports.updateWorkout = async(req,res) => {
    const {id} = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "No such workout"})
    }

    const workout = await Workout.findOneAndUpdate(
        {
            _id:id
        },
        {
            ...req.body
        }
    )

    if(!workout)
        return res.status(404).json({error: "No such workout"})

    res.status(200).json(workout)
}