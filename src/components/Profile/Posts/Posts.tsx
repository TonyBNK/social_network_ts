import React from "react";
import {Post} from "./Post/Post";
import c from "./Posts.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormDataType} from "../../LoginPage";
import {Textarea} from "../../common/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {PostsType} from "../../../bll/reducers/profileReducer";


const maxLength20 = maxLengthCreator(20);

export const Posts: React.FC<PostsType> = (
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

const NewPostForm: React.FC<InjectedFormProps<FormDataType>> = React.memo((
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
});

const NewPostReduxForm = reduxForm<FormDataType>({
    form: 'newPost'
})(NewPostForm)