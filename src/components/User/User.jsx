import React from 'react'
import "./User.css"

function User(props) {

    const { user, eliminarUser } = props
    
    const handleClick = () => {
        eliminarUser(user.id)
    }

    return (
        <div className='user'>
            <div className='info'>
                {user.name}
            </div>
            <div className='info'>
                {user.age}
            </div>
            <div className='info'>
                {user.position}
            </div>
            <img src={user.image} />


            <button onClick={handleClick}>
                Eliminar
            </button>
        </div>
    )
}

export default User