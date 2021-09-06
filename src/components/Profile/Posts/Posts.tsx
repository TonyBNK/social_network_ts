import React, {ChangeEvent} from "react";
import {PostType} from "./Post/Post";
import c from "./Posts.module.css";

type PostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    setNewPost: (text: string) => void
    addNewPost: () => void
}
export const Posts: React.FC<PostsPropsType> = (
    {
        posts,
        newPostText,
        setNewPost,
        addNewPost
    }
) => {
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewPost(e.currentTarget.value);
    };

    const onClickHandler = () => addNewPost();

    return (
        <div className={c.allPosts}>
            <h3 className={c.title}>
                My Posts
            </h3>
            <div className={c.newPost}>
                <div>
                    <textarea
                        value={newPostText}
                        onChange={onChangeHandler}
                    />
                </div>
                <div>
                    <button onClick={onClickHandler}>
                        Send
                    </button>
                </div>
            </div>
            <div>
                <>{posts}</>
            </div>
        </div>
    );
};