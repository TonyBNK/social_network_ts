import {Posts} from "./Posts";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/store";
import {compose} from "redux";
import React, {ComponentType} from "react";
import {PostsDispatchType, PostsStateType} from "../../../types/types";
import {addNewPost} from "../../../redux/actions/actions";


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