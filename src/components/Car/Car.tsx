import React, {FC} from 'react';
import {ICar} from "../../interfaces";

const Car:FC<{car:ICar}> = ({car:{id,model,year,price}}) => {
    return (
        <div>
            <h4>{id}{model}</h4>
            <p>{year}</p>
            <p>{price}</p>
        </div>
    );
};

export default Car;