import React from "react";
import c from './User.module.scss';
import {NavLink} from "react-router-dom";
import catUser from "../../../images/catUser.png";


export const User = React.memo((
    {
        id,
        name,
        status,
        photo,
        country,
        city,
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
                <div className={c.address}>
                    {`${country ? country : ''}`}, {`${city ? city: ''}`}
                </div>
            </div>
        </div>
    )
});