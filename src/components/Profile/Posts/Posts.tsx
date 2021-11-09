import React from "react";
import {Post} from "./Post/Post";
import c from "./Posts.module.scss";
import {PostsType} from "../../../types/types";
import {Button, Form, Input} from 'antd';


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
            name={p.name}
            post={p.post}
            likesCount={p.likesCount}
        />
    )
    const submitAddNewPost = (values: any) => {
        addNewPost(values.newPostText);
    }

    return (
        <div className={c.postsContainer}>
            <div className={c.createNewPostContainer}>
                <div className={c.titleContainer}>
                    My Posts
                </div>
                <NewPostForm onSubmit={submitAddNewPost}/>
            </div>
            <div>
                {postsList}
            </div>
        </div>
    );
};

const NewPostForm: React.FC<{onSubmit: (values: string) => void}> = React.memo((
    {
        onSubmit
    }
) => {
    return (
        <Form onFinish={onSubmit}>
            <Form.Item name={'newPostText'} rules={[
                {required: true, message: "Field is required!"},
                {max: 20, message: 'Max length of post is 20 symbols!'}
            ]}>
                <Input.TextArea placeholder={'Add new post...'}/>
            </Form.Item>
            <div className={c.buttonContainer}>
                <Button type='primary' htmlType='submit'>
                    Post
                </Button>
            </div>
        </Form>
    )
});
