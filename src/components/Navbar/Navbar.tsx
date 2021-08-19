import React from "react";
import c from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <div className={c.navbar}>
            <div className={`${c.item} ${c.active}`}>Profile</div>
            <div className={c.item}>Messages</div>
            <div className={c.item}>News</div>
            <div className={c.item}>Music</div>
            <div className={c.item}>Settings</div>
        </div>
    );
};