import React from "react";
import {Post} from "./Post/Post";
import {
    addNewPostActionCreator,
    setNewPostActionCreator
} from "../../../redux/profileReducer";
import {Posts} from "./Posts";
import {Consumer} from "../../../StoreContext";

export const PostsContainer = () => {
    return (
        <Consumer>
            {
                store => {
                    const state = store.getState();

                    const newPostText = state.profilePage.newPostText;

                    const posts = state.profilePage.posts.map(p =>
                            <Post
                                id={p.id}
                                ava={p.ava}
                                post={p.post}
                                likesCount={p.likesCount}
                            />
                    )

                    const onUpdateTextHandler = (text: string) => {
                        store.dispatch(setNewPostActionCreator(text));
                    };

                    const onAddTextHandler = () => store.dispatch(addNewPostActionCreator());

                    return <Posts
                        posts={posts}
                        newPostText={newPostText}
                        setNewPost={onUpdateTextHandler}
                        addNewPost={onAddTextHandler}
                    />
                }
            }
        </Consumer>
    );
};