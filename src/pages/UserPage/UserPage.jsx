import React from 'react'
import { useParams, Link } from 'react-router-dom'

function UserPage(props) {

    const { users } = props
    const { userId } = useParams()

    // Encontrar o primeiro user com o ID do URL.
    const user = users.find(user => user.id == userId)

    return (
        <div className='App'>
            {!user
                ? <>404 - User not Found</>
                : <>
                    <div className='user'>
                        <h2>Nome</h2><p>{user.name}</p>
                        <h2>Idade</h2><p>{user.age}</p>
                        <h2>Título</h2><p>{user.position}</p>
                        <img width={200} src={user.image} />
                    </div>

                    <Link to={`/`}> <button>Voltar</button> </Link>
                    <Link to={`/edit/${user.id}`}> <button>Editar</button> </Link>

                    {/* localhost:8080/edit/:userId */}

                </>}
        </div>
    )
}

export default UserPage