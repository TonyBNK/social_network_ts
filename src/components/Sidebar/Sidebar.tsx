import React from "react";
import c from "./Sidebar.module.css";
import {NavLink} from "react-router-dom";
import {Friends} from "../Friends/Friends";
import {FriendType} from "../Friends/Friend/Friend";

type FriendsPageType = {
    friends: Array<FriendType>
}
export const Sidebar:React.FC<FriendsPageType> = (props) => {
    return (
        <div className={c.sidebar}>
            <div className={c.item}><NavLink to='/profile' activeClassName={c.active}>Profile</NavLink></div>
            <div className={c.item}><NavLink to='/dialogs' activeClassName={c.active}>Messages</NavLink></div>
            <div className={c.item}><NavLink to='/news' activeClassName={c.active}>News</NavLink></div>
            <div className={c.item}><NavLink to='/music' activeClassName={c.active}>Music</NavLink></div>
            <div className={c.item}><NavLink to='/settings' activeClassName={c.active}>Settings</NavLink></div>
            <div className={c.itemFriends}><Friends friends={props.friends}/></div>
        </div>
    );
};