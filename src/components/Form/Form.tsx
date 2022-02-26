import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {addCarThunk} from "../../store";

const Form: FC = () => {
    const {handleSubmit, register, reset, setValue} = useForm<ICar>();
    const dispatch = useAppDispatch();

    const submit:SubmitHandler<ICar> = (car) =>{
        dispatch(addCarThunk({car}))
    }



    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={"model"} {...register("model")}/>
            <input type="text" placeholder={"price"} {...register("price")}/>
            <input type="text" placeholder={"year"} {...register("year")}/>
            <button>Save</button>
        </form>
    );
};

export default Form;