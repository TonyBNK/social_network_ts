import React from "react";
import {
    addNewPostActionCreator,
    ProfileActionsType,
    ProfileDispatchPropsType,
    ProfilePageStateType,
    setNewPostActionCreator
} from "../../../redux/profileReducer";
import {Posts} from "./Posts";
import {connect} from "react-redux";
import {StateType} from "../../../redux/store-redux";


const mapStateToProps = (state: StateType): ProfilePageStateType => ({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
});

const mapDispatchToProps = (dispatch: (action: ProfileActionsType) => void): ProfileDispatchPropsType => ({
    setNewPost: (text: string) => {
        dispatch(setNewPostActionCreator(text));
    },
    addNewPost: () => {
        dispatch(addNewPostActionCreator());
    }
});

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);