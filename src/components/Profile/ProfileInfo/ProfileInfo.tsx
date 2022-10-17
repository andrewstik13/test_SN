import React from "react";
import s from "./ProfileInfo.module.css"


export function ProfileInfo() {
    return <div className={s.content}>
        <div>
            <img id={s.main_content_page}
                 src='https://escapemgz.com/wp-content/uploads/2019/06/k2-eight-thousanders-569024383df78cafda7e2022.jpg'/>
        </div>
    </div>;
}