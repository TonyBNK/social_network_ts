import React from "react";
import {Post, PostType} from "./Post/Post";
import c from "./Posts.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormDataType} from "../../LoginPage";

type PostsPropsType = {
    posts: Array<PostType>
    addNewPost: (newPostText: string) => void
}
export const Posts: React.FC<PostsPropsType> = (
    {
        posts,
        addNewPost
    }
) => {
    const postsList = posts.map(p =>
        <Post
            id={p.id}
            ava={p.ava}
            post={p.post}
            likesCount={p.likesCount}
        />
    )
    const submitAddNewPost = (values: any) => {
        addNewPost(values.newPostText);
    }

    return (
        <div className={c.allPosts}>
            <h3 className={c.title}>
                My Posts
            </h3>
            <NewPostReduxForm onSubmit={submitAddNewPost}/>
            <div>
                {postsList}
            </div>
        </div>
    );
};

const NewPostForm: React.FC<InjectedFormProps<FormDataType>> = (
    {
        handleSubmit
    }
) => {
    return (
        <form
            className={c.newPost}
            onSubmit={handleSubmit}
        >
            <Field
                component={'textarea'}
                type={'text'}
                name={'newPostText'}
            />
            <div>
                <button>
                    Send
                </button>
            </div>
        </form>
    )
}

const NewPostReduxForm = reduxForm<FormDataType>({
    form: 'newPost'
})(NewPostForm)