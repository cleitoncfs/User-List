import React, { useState } from 'react'

function NewUserPage() {

  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [position, setPosition] = useState("")

  return (
    <div>

      <form>

        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name='name' value={name} />
        </div>

        <div>
          <label htmlFor="age">Idade:</label>
          <input type="number" name='age' value={age} />
        </div>

        <div>
          <label htmlFor="position">Posição:</label>
          <input type="text" name='position' value={position} />
        </div>

        <div>
          <input type="submit" value={"Create User"} />
        </div>

      </form>

    </div>
  )
}

export default NewUserPage