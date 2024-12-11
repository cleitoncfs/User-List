import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Importa o Link para navegação
import "./User.css";

const User = ({ user, eliminarUser }) => {
    return (
        <article className="user-card">
            <img
                className="user-avatar"
                src={user.image}
                alt={`${user.name}'s avatar`}
            />
            <div className="user-info">
                <h2 className="user-name">{user.name}</h2>
                <p className="user-age">Age: {user.age}</p>
                <p className="user-position">Position: {user.position}</p>
                <div className="user-actions">
                    <button
                        className="user-delete-btn"
                        onClick={() => eliminarUser(user.id)}
                    >
                        Delete
                    </button>
                    {/* Botão para Editar */}
                    <Link to={`/edit/${user.id}`}>
                        <button className="user-edit-btn">Edit</button>
                    </Link>
                </div>
            </div>
        </article>
    );
};

User.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        position: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
    eliminarUser: PropTypes.func.isRequired,
};

export default User;
