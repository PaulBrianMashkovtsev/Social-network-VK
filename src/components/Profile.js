import React from 'react';
import headPic from "../img/headPic.webp";

const Profile = () => {
    return  <div className='content'>
        <img src={headPic} alt="pic"/>
    <div>
        ava + discription
    </div>
    <div>
        My posts
        <div>
            New post
        </div>
        <div>
            <div>
                post 1
            </div>
            <div>
                post 2
            </div>
        </div>
    </div>
    </div>
};

export default Profile;