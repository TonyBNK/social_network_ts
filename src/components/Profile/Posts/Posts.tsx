import React, {useState} from "react";
import {Post, PostType} from "./Post/Post";
import c from "./Posts.module.css";


type PostsType = {
    posts: Array<PostType>
    addPost: (postMessage: string) => Array<PostType>
}
export const Posts: React.FC<PostsType> = (props) => {

    let[, setPostsElements] = useState<Array<PostType>>(props.posts);

    let newPostText = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if (newPostText.current !== null) {
            let editedPosts = props.addPost(newPostText.current.value);
            setPostsElements(editedPosts);
            newPostText.current.value = '';
        }
    }

    let postsElements = props.posts.map(p =>
        <Post id={p.id}
              ava={p.ava}
              message={p.message}
              likesCount={p.likesCount}
        />
    );

    return (
        <div className={c.allPosts}>
            <h3 className={c.title}>My Posts</h3>
            <div className={c.newPost}>
                <div>
                    <textarea ref={newPostText}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Send</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
};