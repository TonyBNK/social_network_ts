import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import c from './Profile.module.css'
import azgard from './../../images/azgard.jpg';
import cat_wit_glasses from './../../images/cat_with_glasses.jpg';
import {Posts, PostsStateType} from "./Posts/Posts";


type ProfilePageType = {
    profilePageState: PostsStateType
    setNewPost: (text: string) => void
    addNewPost: (text: string) => void
};
export const Profile: React.FC<ProfilePageType> = (props) => {

    return (
        <div className={c.profile}>
            <ProfileInfo titleImage={azgard}
                         ava={cat_wit_glasses}/>
            <Posts postsState={props.profilePageState}
                   setNewPost={props.setNewPost}
                   addNewPost={props.addNewPost}/>
        </div>
    );
};