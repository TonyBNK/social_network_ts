import React from "react";
import {NavLink} from "react-router-dom";
import c from "./Header.module.css";
import logo from '../../images/logo.png';
import {AuthUserMTSPType} from "../../bll/reducers/authReducer";

type LogOutType = {
    logOut: () => void
}
type HeaderPropsType = AuthUserMTSPType & LogOutType;

export const Header: React.FC<HeaderPropsType> = (
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