import React from 'react';
import s from "./Post.module.css";
import cow from "../../../../img/cow.png";

const Post = () => {
    return (
                <div className={s.item}>
                    <img src={cow} alt="cow"/>
                    post 1
                    <div>
                    <span>Like</span>
                    </div>
                </div>
            

    );
};

export default Post;