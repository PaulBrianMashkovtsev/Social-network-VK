import React from 'react';
import s from "./Post.module.css";
import cow from "../../../../img/cow.png";

const Post = (props) => {

    return (
                <div className={s.item}>
                    <img src={cow} alt="cow"/>
                    {props.message}
                    <div>
                    <span>Likes</span>
                        {props.likes}
                    </div>
                </div>
            

    );
};

export default Post;