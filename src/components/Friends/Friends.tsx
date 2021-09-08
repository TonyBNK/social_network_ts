import React from "react";
import c from './Friends.module.css';
import {Friend, FriendType} from "./Friend/Friend";

export type FriendsPageType = {
    friends: Array<FriendType>
}
export const Friends: React.FC<FriendsPageType> = (
    {
        friends
    }
) => {
    const friendsList = friends.map(f =>
        <Friend
            id={f.id}
            name={f.name}
            ava={f.ava}
        />
    );

    return (
        <div className={c.friends}>
            <div className={c.title}>
                Friends
            </div>
            <div className={c.friendsElements}>
                {friendsList}
            </div>
        </div>
    );
}