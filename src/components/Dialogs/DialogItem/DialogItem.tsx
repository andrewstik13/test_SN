import React from "react";
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    id: string;
    name: string
}

export function DialogItem(props: DialogItemPropsType) {
    return <div>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
}