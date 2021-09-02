import React from "react";
import c from './Dialog.module.css';
import {NavLink} from "react-router-dom";

export type DialogType = {
    id: string
    name: string
    ava: string
};

export const Dialog: React.FC<DialogType> = (props) => {
    let path = `/dialogs/${props.id}`;
    return (
        <div className={c.dialog}>
            <img src={props.ava} alt="ava"/><NavLink to={path} activeClassName={c.active}>{props.name}</NavLink>
        </div>
    );
};