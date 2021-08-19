import React from "react";
import c from './Post.module.css';

type PostPropsType = {
    ava: string
    message: string
    likesCount: number
}
export const Post: React.FC<PostPropsType> = (props) => {
    return (<div className={c.item}>
            <img className={c.usersImg} src={props.ava} alt="аватарка"/> {props.message}
            <div>
                <button>Like</button> {props.likesCount}
            </div>
        </div>
    );
}