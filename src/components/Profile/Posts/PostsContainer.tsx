import React from "react";
import {
    addNewPost, PostsStateType,
    setNewPost
} from "../../../redux/profileReducer";
import {Posts} from "./Posts";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/store";


const mapStateToProps = (state: RootStateType): PostsStateType => {

    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

export const PostsContainer = connect(mapStateToProps, {
    setNewPost,
    addNewPost
})(Posts);