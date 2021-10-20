import React from "react";
import c from './User.module.scss';
import {NavLink} from "react-router-dom";
import catUser from "../../../images/catUser.png";
import {Nullable} from "../../../types/types";


type UserPropsType = {
    id: number,
    name: string,
    status: Nullable<string>,
    photo: Nullable<string>,
    isFollowed: boolean,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    followingInProgress: Array<number>

}
export const User: React.FC<UserPropsType> = React.memo((
    {
        id,
        name,
        status,
        photo,
        isFollowed,
        follow,
        unfollow,
        followingInProgress,
    }
) => {
    return (
        <div className={c.user} key={id}>
            <NavLink to={'/profile/' + id}>
                <img
                    src={photo ? photo : catUser}
                    alt="ava"
                />
            </NavLink>
            {
                isFollowed
                    ? <button
                        disabled={followingInProgress.some(userId => userId === id)}
                        onClick={() => unfollow(id)}>
                        Unfollow
                    </button>
                    : <button
                        disabled={followingInProgress.some(userId => userId === id)}
                        onClick={() => follow(id)}>
                        Follow
                    </button>
            }
            <div className={c.body}>
                <div className={c.name}>
                    {name}
                </div>
                <div className={c.text}>
                    {status}
                </div>
            </div>
        </div>
    )
});