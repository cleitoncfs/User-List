import React from 'react'
import users from './assets/users.json'
import User from './components/User/User'

function UserList() {
  return (
    <div>
        
        <h1>Lista dos meus Utilizadores</h1>
        {users.map(user => <User key={user.id} user={user} />)}

    </div>
  )
}

export default UserList