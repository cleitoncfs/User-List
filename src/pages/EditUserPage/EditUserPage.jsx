import React, { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

/*
  1. Obter o ID do utilizador dos parâmetros ✔️
  2. Pesquisar o user a editar (.find()) ✔️
  3. Obter esse user (.find()) ✔️
  4. Preencher os inputs com os dados desse user ✔️
  5. Tratar da função onSubmit para obter valores dos inputs
  6. Substituir o array por uma cópia com este user editado.
*/

function EditUserPage(props) {

  const { userId } = useParams()
  const { users, setUsers } = props

  const userToEdit = users.find(user => user.id == userId)

  const [name, setName] = useState(userToEdit.name)
  const [age, setAge] = useState(userToEdit.age)
  const [position, setPosition] = useState(userToEdit.position)

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

  const handleSubmit = (e) => {
    e.preventDefault()

    // criar uma cópia do array
    const usersCopy = [...users]

    // percorrer todos os users do array à procura do nosso
    usersCopy.forEach(user => {

      if (user.id == userToEdit.id){

        // alterar o nosso user
        user.name = name
        user.age = age
        user.position = position
      }
    })

    // substituir o array do useState pela cópia
    setUsers(usersCopy)

    navigate("/")
  }


  return (
    <div>

      <h1>Edit User</h1>

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
          <input type="submit" value={"Save Changes"} />
        </div>

      </form>

      <Link to={`/`}> <button>Voltar</button> </Link>

    </div>
  )
}

export default EditUserPage