import React from "react";
import {AllPosts} from "./Posts/AllPosts";
import c from './MyInfo.module.css';
import {PostType} from "./Posts/Post/Post";

type MyInfoType = {
    ava: string
    posts: Array<PostType>
};
export const MyInfo: React.FC<MyInfoType> = (props) => {
    return (
        <div className={c.myinfo}>
            <img className={c.myAva} src={props.ava} alt="кот с очками"/> <span className={c.nickname}>Mr. Cat</span>
            <AllPosts posts={props.posts}/>
        </div>
    );
};