import React from "react";
import {AllPosts} from "./Posts/AllPosts";
import c from './MyInfo.module.css';

type MyProfilePropsType = {
  ava: string
};
export const MyInfo: React.FC<MyProfilePropsType> = (props) => {
    return (
        <div className={c.myinfo}>
            <img className={c.myAva} src={props.ava} alt="кот с очками"/> <span className={c.nickname}>Mr. Cat</span>
            <AllPosts/>
        </div>
    );
};