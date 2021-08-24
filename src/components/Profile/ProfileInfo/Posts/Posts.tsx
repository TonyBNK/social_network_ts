import React from "react";
import {Post, PostType} from "./Post/Post";
import c from "./Posts.module.css";
import {NewPost} from "./NewPost/NewPost";


type AllPostsType = {
    posts: Array<PostType>
}
export const Posts:React.FC<AllPostsType> = (props) => {

    let postsElements = props.posts.map(p => <Post id={p.id} ava={p.ava} message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={c.allposts}>
            <h3 className={c.title}>My Posts</h3>
            <NewPost/>
            <div>
                {postsElements}
            </div>
        </div>
    );
};