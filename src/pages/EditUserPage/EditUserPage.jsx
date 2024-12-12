import { useState } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./EditUserPage.css";

function EditUserPage({ users, setUsers }) {
    const { userId } = useParams();

    const userToEdit = users.find((user) => user.id == userId);

    const [name, setName] = useState(userToEdit.name);
    const [age, setAge] = useState(userToEdit.age);
    const [position, setPosition] = useState(userToEdit.position);

    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    };

    const handlePositionChange = (e) => {
        setPosition(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // criar uma cópia do array
        const usersCopy = [...users];

        // percorrer todos os users do array à procura do nosso
        usersCopy.forEach((user) => {
            if (user.id == userToEdit.id) {
                // alterar o nosso user
                user.name = name;
                user.age = age;
                user.position = position;
            }
        });

        // substituir o array do useState pela cópia
        setUsers(usersCopy);

        navigate("/");
    };

    return (
        <div className="edit-user-container">
            <h1>Edit User</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>

                <div>
                    <label htmlFor="age">Idade:</label>
                    <input
                        type="number"
                        name="age"
                        value={age}
                        onChange={handleAgeChange}
                    />
                </div>

                <div>
                    <label htmlFor="position">Posição:</label>
                    <input
                        type="text"
                        name="position"
                        value={position}
                        onChange={handlePositionChange}
                    />
                </div>

                <div>
                    <input type="submit" value="Save Changes" />
                </div>
            </form>

            <div className="back-button">
                <Link to={`/`}>
                    <button>Back</button>
                </Link>
            </div>
        </div>
    );
}

EditUserPage.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            age: PropTypes.number.isRequired,
            position: PropTypes.string.isRequired,
        })
    ).isRequired,
    setUsers: PropTypes.func.isRequired,
};

export default EditUserPage;
