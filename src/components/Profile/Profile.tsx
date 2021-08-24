import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {TitleImage} from "./TitleImage/TitleImage";
import c from './Profile.module.css'
import azgard from './../../images/azgard.jpg';
import cat_wit_glasses from './../../images/cat_with_glasses.jpg';
import {PostType} from "./ProfileInfo/Posts/Post/Post";

export type ProfilePageType = {
    posts: Array<PostType>
}
export const Profile: React.FC<ProfilePageType> = (props) => {

    return (
        <div className={c.profile}>
            <TitleImage image={azgard}/>
            <ProfileInfo ava={cat_wit_glasses} posts={props.posts}/>
        </div>
    );
};