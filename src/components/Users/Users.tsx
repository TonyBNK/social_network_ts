import React from "react";
import c from './Users.module.css';
import {UserType} from "../../redux/usersReducer";
import catUser from '../../images/catUser.png';
import axios from "axios";

type UsersPropsType = {
    users: Array<UserType>
    followUnfollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void
}
export const Users: React.FC<UsersPropsType> = (
    {
        users,
        followUnfollow,
        setUsers
    }
) => {
    if (users.length === 0) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`).then(response => {
            setUsers(response.data.items);
        });

    }

    const usersList = users.map(u => {
            const onClickHandler = () => {
                followUnfollow(u.id);
            }

            return <div>
                <div className={c.user} key={u.id}>
                    <img src={u.photos.small ? u.photos.small : catUser} alt="ava"/>
                    <button onClick={onClickHandler}>
                        {u.followed ? 'Unfollow' : 'Follow'}
                    </button>
                    <div className={c.body}>
                        <span className={c.name}>{u.name}</span>
                        <span className={c.text}>{u.status}</span>
                        <span
                            className={c.address}>{'u.address.country'}, {'u.address.city'}</span>
                    </div>
                </div>
            </div>
        }
    );

    return (
        <div className={c.users}>
            <h3>Users</h3>
            <span>{usersList}</span>
            <button className={c.show}>Show more</button>
        </div>
    )
}