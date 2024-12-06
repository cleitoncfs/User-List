import React from 'react'
import usersJSON from './../../assets/users.json'
import User from './../../components/User/User'
import { useState } from 'react'

function UsersPage() {
    const [users, setUsers] = useState(usersJSON)

    // Código estranho do stor - não esquecer de estudar a função .sort()
    const obterNovoUser = () => {
        const sortedUsers = users.sort((a, b) => a.id - b.id)
        const userWithHighestID = sortedUsers[sortedUsers.length - 1]
        const newId = userWithHighestID.id + 1
        
        const newUser = {
            ...users[0],
            id: newId
        }
        return newUser
    }

    const eliminarUser = (idParaEliminar) => {
        let usersCopy = [...users]

        usersCopy = usersCopy.filter(user => user.id !== idParaEliminar)

        setUsers(usersCopy)
    }

    const adicionarUser = () => {
        const newUser = obterNovoUser()

        // Criar Cópia
        let usersCopy = [...users]

        // Adicionar User
        usersCopy.push(newUser)

        // Setar Cópia
        setUsers(usersCopy)
    }

    return (
        <div className='App'>
            <h1>User List</h1>
            {users.map(user => <User
                eliminarUser={eliminarUser}
                key={user.id}
                user={user} />
            )}

            <button onClick={adicionarUser}> Adicionar User </button>
        </div>
    )
}

export default UsersPage