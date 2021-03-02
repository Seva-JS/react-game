import React from "react";
import s from '../App.module.css'

export default function Square(props) {
    return (
        <button className={s.sq}
            onClick={props.onClick}>
            {props.value}
        </button>
    );
}


