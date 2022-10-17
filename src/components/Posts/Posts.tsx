import s from "./Posts.module.css";
import React from "react";
import {Post} from "./Post/Post";

export function Posts(props: any) {

    let postsData = [];
    postsData = props.appState;

    let postsElements = postsData.map(
        (post: any) => <Post key={post.id} post={post.post}/>
    );

    return <div className={s.paddingBlock}>
        My posts
        <div>
            <div>
                <textarea></textarea>
            </div>
            <button>Add post</button>
        </div>
        <div className={s.marginPosts}>
            {
                postsElements
            }
        </div>
    </div>;
}