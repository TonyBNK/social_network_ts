import React from "react";
import c from './Users.module.scss';
import {UserType} from "../../types/types";
import {User} from "./User/User";
import {Paginator} from "../common/Paginator/Paginator";


type UsersPropsType = {
    users: Array<UserType>
    currentPage: number
    usersTotalCount: number
    pageSize: number
    follow: (id: number) => void
    unfollow: (id: number) => void
    requestUsers: (page: number, pageSize: number) => void
    followingInProgress: Array<number>
}

export const Users: React.FC<UsersPropsType> = (
    {
        users,
        currentPage,
        usersTotalCount,
        pageSize,
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

    return (
        <div className={c.users}>
            <div>
                <h3>Users</h3>
                <Paginator
                    currentPage={currentPage}
                    pageSize={pageSize}
                    usersTotalCount={usersTotalCount}
                    requestUsers={requestUsers}
                />
            </div>
            <span>
                    {usersList}
                </span>
            <button className={c.show}>Show more</button>
        </div>
    )
}