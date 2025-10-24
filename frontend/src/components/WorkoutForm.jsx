import React, { useState } from 'react'
import { useWorkoutContext } from '../hooks/useWorkoutContext'
import { useAuthContext } from '../hooks/useAuthContext'


const WorkoutForm = () => {
  
  const {user} = useAuthContext()

    const {dispatch} = useWorkoutContext()
  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)
  

  // ✅ Make handleSubmit async and include event parameter
  const handleSubmit = async (e) => {
    e.preventDefault()

    if(!user){
      setError('user Must be logged in!')
      return
    }

    const workout = { title, load, reps }

    try {
      const response = await fetch('/api/workouts', {
        method: 'POST',
        body: JSON.stringify(workout),
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${user.token}`
        },
      })

      const json = await response.json()

      if (!response.ok) {
        setError(json.error)
        return
      }

      // ✅ Clear form and error on success
      setError(null)
      setTitle('')
      setLoad('')
      setReps('')
      console.log('✅ New workout added successfully:', json)
      dispatch({type: 'CREATE_WORKOUT',payload:json})
    } catch (err) {
      setError('Failed to connect to server')
      console.error(err)
    }
  }

  return (
    <form className='create' onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <label>Exercise Title:</label>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label>Load (in kg):</label>
      <input
        type='number'
        value={load}
        onChange={(e) => setLoad(e.target.value)}
        required
      />

      <label>Reps:</label>
      <input
        type='number'
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        required
      />

      <button type='submit'>Add Workout</button>

      {/* ✅ Show error message if any */}
      {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default WorkoutForm
