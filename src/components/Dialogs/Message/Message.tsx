import React from "react";
import s from './Message.module.css'

type MessagePropsType = {
    message: string;
}

export function Message(props: MessagePropsType) {
    return <div>
        {props.message}
    </div>
}