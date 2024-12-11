import React from "react";
import User from "./../../components/User/User";
import { Link } from "react-router-dom";
import "./UsersPage.css";

function UsersPage(props) {
    const { users, setUsers } = props;

    const eliminarUser = (idParaEliminar) => {
        let usersCopy = [...users];
        usersCopy = usersCopy.filter((user) => user.id !== idParaEliminar);
        setUsers(usersCopy);
    };

    return (
        <div className="App">
            <h1>User List</h1>
            {users.map((user) => (
                <User eliminarUser={eliminarUser} key={user.id} user={user} />
            ))}

            <Link to="/new">
                <button className="add-user-btn">Add User</button>
            </Link>
        </div>
    );
}

export default UsersPage;
