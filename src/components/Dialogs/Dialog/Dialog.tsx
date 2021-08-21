import React from "react";
import c from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogType = {
    id: number
    name: string
};

export const Dialog: React.FC<DialogType> = (props) => {
    let path = `/dialogs/${props.id}`;
    return (
        <div className={c.dialog}>
            <NavLink to={path} activeClassName={c.active}>{props.name}</NavLink>
        </div>
    );
};