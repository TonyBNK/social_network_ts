import React, {ChangeEvent} from "react";
import {Post, PostType} from "./Post/Post";
import c from "./Posts.module.css";


export type PostsStateType = {
    posts: PostType[]
    newPost: string
}
type PostsType = {
    postsState: PostsStateType
    setNewPost: (text: string) => void
    addNewPost: (text: string) => void
}
export const Posts: React.FC<PostsType> = (props) => {

    let postsElements = props.postsState.posts.map(p =>
        <Post id={p.id}
              ava={p.ava}
              message={p.message}
              likesCount={p.likesCount}
        />
    );

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.setNewPost(e.currentTarget.value);
    };

    const onClickHandler = () => {
        props.addNewPost(props.postsState.newPost);
    }

    return (
        <div className={c.allPosts}>
            <h3 className={c.title}>My Posts</h3>
            <div className={c.newPost}>
                <div>
                    <textarea value={props.postsState.newPost}
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