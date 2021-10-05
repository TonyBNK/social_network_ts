import React from "react";
import {Post, PostType} from "./Post/Post";
import c from "./Posts.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormDataType} from "../../LoginPage";
import {Textarea} from "../../common/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

type PostsPropsType = {
    posts: Array<PostType>
    addNewPost: (newPostText: string) => void
}

const maxLength20 = maxLengthCreator(20);

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
                component={Textarea}
                placeholder={'Add new post...'}
                name={'newPostText'}
                validate={[required, maxLength20]}
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