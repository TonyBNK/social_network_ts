import React from "react";
import {Post} from "./Post/Post";
import c from "./AllPosts.module.css";
import cat_with_tongue from './../../../../images/cat_with_tongue.jpg';
import angry_cat from './../../../../images/angry_cat.webp';
import {NewPost} from "./NewPost/NewPost";

export const AllPosts = () => {
    return (
        <div className={c.allposts}>
            <h3 className={c.title}>My Posts</h3>
            <NewPost/>
            <div>
                <Post ava={cat_with_tongue} message={"Кто насрал в мой лоток?"} likesCount={14}/>
                <Post ava={angry_cat} message={"Кожанный мешок опять забыл покормить }:("} likesCount={23}/>
            </div>
        </div>
    );
};