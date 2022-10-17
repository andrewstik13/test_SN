import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from "./Message/Message";

export function Dialogs(props: any) { // #? разобраться с any
    let dialogsData = props.appState.dialogsData;

    let messageData = props.appState.messageData;

    let dialogsElements = dialogsData.map((dialog: any) =>
        <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>); // #? разобраться с key

    let messageElements = messageData.map((message: any) =>
        <Message key={message.id} message={message.message}/>);

    return <div className={s.dialogs}>
        <div className={s.dialogItems}>
            {
                dialogsElements
            }
        </div>
        <div className={s.messages}>
            {
                messageElements
            }
        </div>
    </div>
}