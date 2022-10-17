import s from "./Post.module.css";
import React from "react";

type PostPropsType = {
    post: string;
}

export function Post(props: PostPropsType) {
    return <div className={s.item}>
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Flag_of_Yamaguchi%2C_Yamaguchi.svg/1920px-Flag_of_Yamaguchi%2C_Yamaguchi.svg.png"/>
        <span>{props.post}</span>
        <br/>
        <span>like</span>
    </div>;
}