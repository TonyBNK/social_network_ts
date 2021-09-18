import React from "react";
import {NavLink} from "react-router-dom";
import c from "./Header.module.css";
import logo from '../../images/logo.png';
import {AuthUserMTSPType} from "../../types/authUserTypes";


type HeaderPropsType = AuthUserMTSPType;

export const Header: React.FC<HeaderPropsType> = (
    {
        login,
        isAuth
    }
) => {
    return (
        <header className={c.head}>
            <img src={logo} alt="логотип"/>
            <div className={c.loginBlock}>
                {
                    isAuth
                        ? login
                        : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
};