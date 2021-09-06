import React from "react";
import c from './Friends.module.css';
import {FriendType} from "./Friend/Friend";

export type FriendsPageType = {
    friends: Array<FriendType>
}
export const Friends: React.FC<FriendsPageType> = (
    {
        friends
    }
) => {

    return (
        <div className={c.friends}>
            <div className={c.title}>
                Friends
            </div>
            <div className={c.friendsElements}>
                {friends}
            </div>
        </div>
    );
}