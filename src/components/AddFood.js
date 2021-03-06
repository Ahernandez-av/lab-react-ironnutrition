import React from 'react'
import useInput from '../hooks/useInput'

function AddFood({
  addNewFood
}) {

  const nameInput = useInput('')
  const caloriesInput = useInput('')
  const imageInput = useInput('')

  function handleFormSubmit(event) {
    event.preventDefault()
    addNewFood({
      name: nameInput.value,
      calories: caloriesInput.value,
      image: imageInput.value,
      quantity: 1
    })
    console.log(nameInput)
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          {...nameInput}
        />
        <br />
        <label>Calories:</label>
        <input
          type="text"
          name="calories"
          {...caloriesInput}
        />
        <br />
        <label>Image:</label>
        <input type="text" name="image"  
          {...imageInput} 
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default AddFood