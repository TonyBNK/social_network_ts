import React, {ChangeEvent, useState} from "react";
import {Post, PostType} from "./Post/Post";
import c from "./Posts.module.css";


type PostsType = {
    posts: Array<PostType>
    newPostText: string
    updateNewPostText: (text: string) => void
    addNewPostText: (text: string) => void
}
export const Posts: React.FC<PostsType> = (props) => {

    let newPostText = React.createRef<HTMLTextAreaElement>();

    let postsElements = props.posts.map(p =>
        <Post id={p.id}
              ava={p.ava}
              message={p.message}
              likesCount={p.likesCount}
        />
    );

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value);
    };

    const onClickHandler = () => {
        if (newPostText.current) props.addNewPostText(newPostText.current.value);
    }

    return (
        <div className={c.allPosts}>
            <h3 className={c.title}>My Posts</h3>
            <div className={c.newPost}>
                <div>
                    <textarea ref={newPostText}
                              value={props.newPostText}
                              onChange={onChangeHandler}/>
                </div>
                <div>
                    <button onClick={onClickHandler}>Send</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
};