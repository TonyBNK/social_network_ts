import React from "react";
import c from './Friends.module.scss';
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
        <div className={c.friendsContainer}>
            <div className={c.titleContainer}>
                Friends
            </div>
            <div className={c.bodyContainer}>
                {friendsList}
            </div>
        </div>
    );
}