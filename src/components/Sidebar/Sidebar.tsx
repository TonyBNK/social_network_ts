import React from "react";
import c from "./Sidebar.module.css";
import {NavLink} from "react-router-dom";
import {FriendsContainer} from "../Friends/FriendsContainer";

export const Sidebar:React.FC = (

) => {
    return (
        <div className={c.sidebar}>
            <div className={c.item}>
                <NavLink
                    to='/profile'
                    activeClassName={c.active}>
                    Profile
                </NavLink>
            </div>
            <div className={c.item}>
                <NavLink
                    to='/dialogs'
                    activeClassName={c.active}>
                    Messages
                </NavLink>
            </div>
            <div className={c.item}>
                <NavLink
                    to='/news'
                    activeClassName={c.active}>
                    News
                </NavLink>
            </div>
            <div className={c.item}>
                <NavLink
                    to='/music'
                    activeClassName={c.active}>
                    Music
                </NavLink>
            </div>
            <div className={c.item}>
                <NavLink
                    to='/settings'
                    activeClassName={c.active}>
                    Settings
                </NavLink>
            </div>
            <div className={c.itemFriends}>
                <FriendsContainer/>
            </div>
        </div>
    );
};