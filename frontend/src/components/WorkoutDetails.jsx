import React from 'react'
import { useWorkoutContext } from '../hooks/useWorkoutContext'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useAuthContext } from '../hooks/useAuthContext'


const WorkoutDetails = ({workout}) => {

    const {user} = useAuthContext()

    const{ dispatch} = useWorkoutContext()

    const handleClick = async() => {
        if(!user){
            return
        }
        const response = await fetch('/api/workouts/' + workout._id , {
            method: 'DELETE',
            headers:{
                'Authorization':`Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if(response.ok){
            dispatch({type:'DELETE_WORKOUT', payload:json})
        }
    }
  return (
    <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Load ( in kg's )</strong>&nbsp;:&nbsp;{workout.load} </p>
        <p><strong>Reps</strong>&nbsp;:&nbsp;{workout.reps}</p>
        <p>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix:true})}</p>
        <span onClick={handleClick} className="material-symbols-outlined">
delete
</span>
    </div>
  )
}

export default WorkoutDetails
