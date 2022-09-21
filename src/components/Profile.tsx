import React from "react";
import s from "./Profile.module.css"

export function Profile() {
    return <div className={s.content}>
        <img id={s.main_content_page}
             src='https://escapemgz.com/wp-content/uploads/2019/06/k2-eight-thousanders-569024383df78cafda7e2022.jpg'/>
        <div>
            ava + description
        </div>
        <div>
            My posts
            <div>
                New posts
            </div>
        </div>
        <div>
            <div>post1</div>
            <div>post1</div>
            <div>post1</div>
        </div>
    </div>;
}