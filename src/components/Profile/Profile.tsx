import React from "react";
import s from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {Posts} from "../Posts/Posts";


function getDate(inputStr: string) {
    let vResult = '';

    let now = new Date(inputStr).toLocaleDateString();
    return vResult = now;
}

export function Profile(props: any) {
    return <div className={s.content}>
        <ProfileInfo/>
        <Posts appState={props.appState}/>
        {getDate('1900-12-31')}
    </div>;
}