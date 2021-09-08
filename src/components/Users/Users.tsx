import React from "react";
import c from './Users.module.css';
import {v1} from "uuid";
import vsratiy_cat from "../../images/vsratiy_cat.jpg";
import doge from "../../images/doge.jpg";
import parrot from "../../images/parrot.jpg";
import hamster from "../../images/hamster.jpg";
import turtle from "../../images/turtle.jpg";
import {UserType} from "../../redux/usersReducer";

type UsersPropsType = {
    users: Array<UserType>
    followUnfollow: (id: string) => void
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
        setUsers([
            {
                id: v1(),
                name: "Cat",
                ava: vsratiy_cat,
                followed: true,
                address: {country: 'Germany', city: 'Berlin'},
                text: 'Guten tac'
            },
            {
                id: v1(),
                name: "Doge",
                ava: doge,
                followed: false,
                address: {country: 'China', city: 'Beijin'},
                text: 'Nihao'
            },
            {
                id: v1(),
                name: "Parrot",
                ava: parrot,
                followed: true,
                address: {country: 'Russia', city: 'Moscow'},
                text: 'Priv'
            },
            {
                id: v1(),
                name: "Hamster",
                ava: hamster,
                followed: true,
                address: {country: 'UK', city: 'London'},
                text: 'Hello'
            },
            {
                id: v1(),
                name: "Turtle",
                ava: turtle,
                followed: false,
                address: {country: 'Japan', city: 'Tokyo'},
                text: 'Konichava'
            },
        ]);
    }

    const usersList = users.map(u => {
            const onClickHandler = () => {
                followUnfollow(u.id);
            }

            return <div>
                <div className={c.user} key={u.id}>
                    <img src={u.ava} alt="ava"/>
                    <button onClick={onClickHandler}>
                        {u.followed ? 'Unfollow' : 'Follow'}
                    </button>
                    <div className={c.body}>
                        <span className={c.name}>{u.name}</span>
                        <span className={c.text}>{u.text}</span>
                        <span
                            className={c.address}>{u.address.country}, {u.address.city}</span>
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