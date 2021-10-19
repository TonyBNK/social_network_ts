import React from "react";
import {NavLink} from "react-router-dom";
import c from "./Header.module.css";
import logo from '../../images/logo.png';
import {AuthUserPropsType} from "../../types/types";


export const Header: React.FC<AuthUserPropsType> = (
    {
        login,
        isAuth,
        logOut
    }
) => {
    const logOutHandler = () => {
        logOut();
    }

    return (
        <header className={c.head}>
            <img src={logo} alt="логотип"/>
            <div className={c.loginBlock}>
                {
                    isAuth
                        ? <div>
                            {login} <button onClick={logOutHandler}>Logout</button>
                        </div>
                        : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
};