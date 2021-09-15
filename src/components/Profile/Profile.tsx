import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import c from './Profile.module.css'
import azgard from './../../images/azgard.jpg';
import {PostsContainer} from "./Posts/PostsContainer";
import {ProfileInfoType} from "../../redux/profileReducer";

export const Profile: React.FC<ProfileInfoType> = (
    {
        profile
    }
) => {
    return (
        <div className={c.profile}>
            <ProfileInfo titleImage={azgard}
                         profile={profile}/>
            <PostsContainer/>
        </div>
    );
};