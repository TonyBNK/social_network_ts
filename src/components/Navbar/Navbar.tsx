import React from "react";
import c from "./Navbar.module.scss";
import {NavLink} from "react-router-dom";
import {Menu} from "antd";


export const Navbar:React.FC = React.memo((

) => {
    return (
        <Menu theme='light' mode='inline'
              className={c.navbarMenu}
        >
            <Menu.Item key='profile'>
                <NavLink to='/profile'>
                    Profile
                </NavLink>
            </Menu.Item>
            <Menu.Item key='dialogs'>
                <NavLink to='/dialogs'>
                    Dialogs
                </NavLink>
            </Menu.Item>
            <Menu.Item key='news'>
                <NavLink to='/news'>
                    News
                </NavLink>
            </Menu.Item>
            <Menu.Item key='music'>
                <NavLink to='/music'>
                    Music
                </NavLink>
            </Menu.Item>
            <Menu.Item key='users'>
                <NavLink to={'/users'}>
                    Find Users
                </NavLink>
            </Menu.Item>
            <Menu.Item key='settings'>
                <NavLink to={'/settings'}>
                    Settings
                </NavLink>
            </Menu.Item>
        </Menu>
    );
});