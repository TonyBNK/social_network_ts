import React from "react";
import c from './User.module.scss';
import {NavLink} from "react-router-dom";
import catUser from "../../../images/catUser.png";
import {Nullable} from "../../../types/types";
import {Avatar, Button} from 'antd';


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
        <div className={c.userCard} key={id}>
            <NavLink to={'/profile/' + id}>
                <Avatar size={70} src={photo ? photo : catUser}/>
            </NavLink>
            <div className={status ? c.statusContainer : c.noStatus}>
                {status}
            </div>
            <div className={c.nameContainer}>
                {name}
            </div>
            {
                isFollowed
                    ? <Button type='primary' shape='round'
                              disabled={followingInProgress.some(userId => userId === id)}
                              onClick={() => unfollow(id)}>
                        Unfollow
                    </Button>
                    : <Button type='primary' shape='round'
                              disabled={followingInProgress.some(userId => userId === id)}
                              onClick={() => follow(id)}>
                        Follow
                    </Button>
            }
        </div>
    )
});