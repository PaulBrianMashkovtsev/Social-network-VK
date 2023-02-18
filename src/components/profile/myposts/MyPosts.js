import React from 'react';
import s from './MyPosts.module.css';
import Post from "./post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>

            <div className={s.posts}>
                <Post message ="Hi, how are you?" Likes='3'/>
                <Post message="I`m on a vacation" Likes='9'/>

            </div>
        </div>
    );
};

export default MyPosts;