import React from "react";

import classes from "./Checkbox.module.css"

import {useDispatch, useSelector} from "react-redux";


const Checkbox = () => {
    const dispatch = useDispatch()
    const checked = useSelector(state => state.flag)

    const handleClick = () => {
        dispatch({type: "CHANGE_FLAG"})
    }

    return (
        <div className={classes.checkbox_main}>
            <br />
            <p>Я принимаю соглашение</p>
            <input className={classes.checkbox_field} type="checkbox" onChange={handleClick} name="" id="" />

            {checked ? 
                <button className={classes.btn_1}>Принять</button>:
                <button className={classes.btn_1} disabled="disabled">Принять</button>
            }
            
        </div>
    )
}

export default Checkbox;