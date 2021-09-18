import React from "react";
import c from './Users.module.css';
import catUser from '../../images/catUser.png';
import {NavLink} from "react-router-dom";
import axios from "axios";


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
    changeCurrentPage: (currentPage: number) => void
}

export const Users: React.FC<UsersPropsType> = (
    {
        users,
        currentPage,
        usersTotalCount,
        pageSize,
        follow,
        unfollow,
        changeCurrentPage
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
                            ? <button onClick={() => {
                                axios
                                    .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': 'c71ad832-d3a7-49e4-81f5-4b21198b07fd'
                                        }
                                    })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            unfollow(u.id);
                                        }
                                    })
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                axios
                                    .post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, null, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': 'c71ad832-d3a7-49e4-81f5-4b21198b07fd'
                                        }
                                    })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            follow(u.id);
                                        }
                                    })
                            }}>Follow</button>
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

    const pagesList = pages.map(page => {
        const onChangeCurrentPageHandler = () => {
            changeCurrentPage(page);
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