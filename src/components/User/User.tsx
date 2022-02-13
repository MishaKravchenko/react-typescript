import React, {FC} from 'react';

import {IUser} from "../../interfaces";

interface IProps {
    user: IUser
}

const User: FC<IProps> = ({user:{id,name,username,email}}) => {
    return (
        <div>
            <h4>{id}. {name}</h4>
            <p>{username} - - {email}</p>
        </div>
    );
};

export default User;