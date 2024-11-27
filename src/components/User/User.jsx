import React from 'react'

function User(props) {
    
    const { user } = props

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
        </div>
    )
}

export default User