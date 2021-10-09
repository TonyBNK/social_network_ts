import React from "react";
import c from './Users.module.css';
import catUser from '../../images/catUser.png';
import {NavLink} from "react-router-dom";


type UserType = {
    id: number,
    name: string,
    photos: {
        small: string,
        large: string
    },
    followed: boolean,
    address: {
        country: string,
        city: string
    },
    status: string
}
type UsersPropsType = {
    users: Array<UserType>
    currentPage: number
    usersTotalCount: number
    pageSize: number
    follow: (id: number) => void
    unfollow: (id: number) => void
    requestUsers: (page: number, pageSize: number) => void
    followingProgress: Array<number>
    setFollowingProgress: (isFetching: boolean, buttonId: number) => void
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
        followingProgress
    }
) => {
    const usersList = users.map(u => {
            return <div>
                <div className={c.user} key={u.id}>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small ? u.photos.small : catUser}
                             alt="ava"/>
                    </NavLink>
                    {
                        u.followed
                            ? <button
                                disabled={followingProgress.some(id => id === u.id)}
                                onClick={() => unfollow(u.id)}>
                                Unfollow
                            </button>
                            : <button
                                disabled={followingProgress.some(id => id === u.id)}
                                onClick={() => follow(u.id)}>
                                Follow
                            </button>
                    }

                    <div className={c.body}>
                        <div className={c.name}>{u.name}</div>
                        <div className={c.text}>{u.status}</div>
                        <div
                            className={c.address}>{'u.address.country'}, {'u.address.city'}</div>
                    </div>
                </div>
            </div>
        }
    );

    const pagesCount = Math.ceil(usersTotalCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const pagesList = pages.map((page) => {

        const onChangeCurrentPageHandler = () => {
            requestUsers(page, pageSize);
        }

        return (
            <span
                className={
                    currentPage === page
                        ? c.selectedPage
                        : ''
                }
                onClick={onChangeCurrentPageHandler}
            >
                {page}
            </span>
        )
    });

    return (
        <div className={c.users}>
            <div>
                <h3>Users</h3>
                {pagesList}
            </div>
            <span>
                    {usersList}
                </span>
            <button className={c.show}>Show more</button>
        </div>
    )
}