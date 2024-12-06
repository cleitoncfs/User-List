import React from 'react'
import { Link } from 'react-router-dom'
import "./User.css"

function User(props) {

    const { user, eliminarUser } = props

    const handleClick = () => {
        eliminarUser(user.id)
    }

    return (
        <div className='user'>
            <Link to={`/${user.id}`}>
                <div className='info'>
                    {user.name}
                </div>
            </Link>
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
        </div >

    )
}

export default User