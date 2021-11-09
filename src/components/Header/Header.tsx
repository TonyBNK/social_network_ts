import React from "react";
import {NavLink} from "react-router-dom";
import c from "./Header.module.scss";
import logo from '../../images/logo.png';
import {AuthUserPropsType} from "../../types/types";
import {Layout, Menu} from 'antd';
import 'antd/dist/antd.css';


const {Header: HeaderAntD} = Layout;

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
        <HeaderAntD className={c.headerContainer}>
            <img src={logo} alt="логотип"/>
            <header>Catbook</header>
            <Menu theme='dark' mode='horizontal' style={{position: 'relative'}}>
                <Menu.Item key='1' style={{position: 'absolute', right: 0}}>
                    {
                        isAuth
                            ? <NavLink to={'/login'} onClick={logOutHandler}>Sign
                                Out</NavLink>
                            : <NavLink to={'/login'}>Sign In</NavLink>
                    }
                </Menu.Item>
            </Menu>
        </HeaderAntD>
    );
};