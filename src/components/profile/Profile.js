import React from 'react';
import headPic from "../../img/headPic.webp";
import profile from './Profile.module.css';
import MyPosts from "./myposts/MyPosts";

const Profile = () => {
    return  (
        <div className={profile.content}>
        <img src={headPic} alt="pic"/>
    <div>
        ava + discription
    </div>
        <MyPosts/>
    </div>
    )
};

export default Profile;
