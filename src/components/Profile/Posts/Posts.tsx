import React, {ChangeEvent} from "react";
import {Post, PostType} from "./Post/Post";
import c from "./Posts.module.css";

export type ActionType = { type: string, text?: string };
export type PostsStateType = {
    posts: PostType[]
    newPost: string
}

type SetNewPostActionType = {
    type: 'SET-NEW-POST',
    postText: string
}
type AddNewPostActionType = {
    type: 'ADD-NEW-POST'
}
export type PostsActionsType = SetNewPostActionType | AddNewPostActionType;

type PostsType = {
    postsState: PostsStateType
    dispatch: (action: PostsActionsType) => void
}


export const Posts: React.FC<PostsType> = (props) => {

    let postsElements = props.postsState.posts.map(p =>
        <Post id={p.id}
              ava={p.ava}
              post={p.post}
              likesCount={p.likesCount}
        />
    );

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        //props.setNewPost(e.currentTarget.value);
        props.dispatch({type: "SET-NEW-POST", postText: e.currentTarget.value});
    };

    const onClickHandler = () => {
        //props.addNewPost(props.postsState.newPost);
        props.dispatch({type: 'ADD-NEW-POST'});
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