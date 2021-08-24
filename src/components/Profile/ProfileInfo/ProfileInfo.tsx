import React from "react";
import {Posts} from "./Posts/Posts";
import c from './ProfileInfo.module.css';
import {PostType} from "./Posts/Post/Post";

type MyInfoType = {
    ava: string
    posts: Array<PostType>
};
export const ProfileInfo: React.FC<MyInfoType> = (props) => {
    return (
        <div className={c.myinfo}>
            <img className={c.myAva} src={props.ava} alt="кот с очками"/> <span className={c.nickname}>Mr. Cat</span>
            <Posts posts={props.posts}/>
        </div>
    );
};