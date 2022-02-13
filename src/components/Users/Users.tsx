import React, {FC, useEffect, useState} from 'react';
import {userService} from "../../services";
import {IUser} from "../../interfaces";
import User from "../User/User";

const Users: FC = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {

        const getAllUsers = async () => {
            const {data} = await userService.getAll();
            setUsers(data)
        }
        getAllUsers()
    }, [])

    return (
        <div>
            <h2>Users</h2>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;