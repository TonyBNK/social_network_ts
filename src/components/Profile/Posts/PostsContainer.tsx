import {addNewPost, PostsStateType} from "../../../bll/reducers/profileReducer";
import {Posts} from "./Posts";
import {connect} from "react-redux";
import {RootStateType} from "../../../bll/store";


const mapStateToProps = (state: RootStateType): PostsStateType => {
    return {
        posts: state.profilePage.posts
    }
};

export const PostsContainer = connect(mapStateToProps, {
    addNewPost
})(Posts);