import React from "react";
import c from './Post.module.css';

export type PostType = {
    id: string
    ava: string
    message: string
    likesCount: number
}
export const Post: React.FC<PostType> = (props) => {
    return (<div className={c.item}>
            <img className={c.usersImg} src={props.ava} alt="ava"/> {props.message}
            <div>
                <button>Like</button> {props.likesCount}
            </div>
        </div>
    );
}