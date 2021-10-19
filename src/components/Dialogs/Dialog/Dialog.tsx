import React from "react";
import c from './Dialog.module.css';
import {NavLink} from "react-router-dom";

export type DialogType = {
    id: string
    name: string
    ava: string
};
export const Dialog: React.FC<DialogType> = React.memo((
    {
        id,
        ava,
        name
    }
) => {
    const path = `/dialogs/${id}`;
    return (
        <div className={c.dialog}>
            <img
                src={ava}
                alt="ava"/>
            <NavLink
                to={path}
                activeClassName={c.active}>
                {name}
            </NavLink>
        </div>
    );
});