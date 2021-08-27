import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import c from './Profile.module.css'
import azgard from './../../images/azgard.jpg';
import cat_wit_glasses from './../../images/cat_with_glasses.jpg';
import {PostType} from "./Posts/Post/Post";
import {Posts} from "./Posts/Posts";

export type ProfilePageType = {
    posts: Array<PostType>
    addPost: (postMessage: string) => void
}
export const Profile: React.FC<ProfilePageType> = (props) => {

    return (
        <div className={c.profile}>
            <ProfileInfo titleImage={azgard}
                         ava={cat_wit_glasses}/>
            <Posts posts={props.posts}
                   addPost={props.addPost}/>
        </div>
    );
};