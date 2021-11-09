import React from "react";
import c from './Users.module.scss';
import {UserType} from "../../types/types";
import {User} from "./User/User";
import {Button, Pagination} from "antd";


type UsersPropsType = {
    users: Array<UserType>
    currentPage: number
    usersTotalCount: number
    follow: (id: number) => void
    unfollow: (id: number) => void
    requestUsers: (page: number, pageSize?: number) => void
    followingInProgress: Array<number>
}

export const Users: React.FC<UsersPropsType> = (
    {
        users,
        currentPage,
        usersTotalCount,
        follow,
        unfollow,
        requestUsers,
        followingInProgress
    }
) => {
    const usersList = users.map(u => {
            return <User
                id={u.id}
                name={u.name}
                status={u.status}
                photo={u.photos.small}
                isFollowed={u.followed}
                follow={follow}
                unfollow={unfollow}
                followingInProgress={followingInProgress}
            />
        }
    );

    const onChange = (currentPage: number, pageSize?: number) => {
        requestUsers(currentPage, pageSize);
    };

    return (
        <div className={c.usersContainer}>
            <div className={c.titleContainer}>
                Users
            </div>
            <div className={c.bodyContainer}>
                {usersList}
            </div>
            <div className={c.moreUsersContainer}>
                <Button type='primary' shape='round' size='large'>
                    Show more
                </Button>
                <Pagination current={currentPage} onChange={onChange}
                            total={usersTotalCount} onShowSizeChange={onChange}/>
            </div>
        </div>
    )
}