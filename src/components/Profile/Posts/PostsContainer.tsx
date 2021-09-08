import React from "react";
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

                    const onUpdateTextHandler = (text: string) => {
                        store.dispatch(setNewPostActionCreator(text));
                    };

                    const onAddTextHandler = () => store.dispatch(addNewPostActionCreator());

                    return <Posts
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}
                        setNewPost={onUpdateTextHandler}
                        addNewPost={onAddTextHandler}
                    />
                }
            }
        </Consumer>
    );
};