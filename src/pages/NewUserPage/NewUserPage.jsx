import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function NewUserPage(props) {

  const { users, setUsers } = props

  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [position, setPosition] = useState("")

  const navigate = useNavigate()

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleAgeChange = (e) => {
    setAge(e.target.value)
  }

  const handlePositionChange = (e) => {
    setPosition(e.target.value)
  }

  const getNextId = () => {
    users.sort((a, b) => a.id - b.id)
    const lastUser = users[users.length - 1]
    return lastUser.id + 1
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Criar um novo user
    const newUser = {
      id: getNextId(),
      name,
      age,
      position,
      image: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
    }

    setUsers([...users, newUser])

    navigate("/")
  }

  return (
    <div>

      <h1>Create New User</h1>

      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name='name' value={name} onChange={handleNameChange} />
        </div>

        <div>
          <label htmlFor="age">Idade:</label>
          <input type="number" name='age' value={age} onChange={handleAgeChange} />
        </div>

        <div>
          <label htmlFor="position">Posição:</label>
          <input type="text" name='position' value={position} onChange={handlePositionChange} />
        </div>

        <div>
          <input type="submit" value={"Create User"} />
        </div>

      </form>

      <Link to={`/`}> <button>Voltar</button> </Link>

    </div>
  )
}

export default NewUserPage