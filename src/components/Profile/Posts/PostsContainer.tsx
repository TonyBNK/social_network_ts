import {
    addNewPost,
    PostsDispatchType,
    PostsStateType
} from "../../../bll/reducers/profileReducer";
import {Posts} from "./Posts";
import {connect} from "react-redux";
import {RootStateType} from "../../../bll/store";
import {compose} from "redux";
import React, {ComponentType} from "react";


const mapStateToProps = (state: RootStateType): PostsStateType => {
    return {
        posts: state.profilePage.posts
    }
};

export const PostsContainer = compose<ComponentType>(
    connect<PostsStateType, PostsDispatchType, {}, RootStateType>(
        mapStateToProps, {addNewPost}
    ),
    React.memo
)(Posts);