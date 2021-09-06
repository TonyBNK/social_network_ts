import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import c from './Profile.module.css'
import azgard from './../../images/azgard.jpg';
import cat_wit_glasses from './../../images/cat_with_glasses.jpg';
import {PostsContainer} from "./Posts/PostsContainer";

export const Profile = () => {
    return (
        <div className={c.profile}>
            <ProfileInfo titleImage={azgard}
                         ava={cat_wit_glasses}/>
            <PostsContainer/>
        </div>
    );
};