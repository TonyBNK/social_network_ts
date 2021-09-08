import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Profile} from "./components/Profile/Profile";
import logo from './images/logo.png'
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header logotype={logo}/>
            <Sidebar/>
            <Route
                path='/profile'
                render={() => <Profile/>}
            />
            <Route
                path='/dialogs'
                render={() => <DialogsContainer/>}
            />
            <Route
                path='/news'
                render={() => <News/>}
            />
            <Route
                path='/music'
                render={() => <Music/>}
            />
            <Route
                path={'/users'}
                render={() => <UsersContainer/>}/>
            <Route
                path='/settings'
                render={() => <Settings/>}
            />
        </div>
    );
}

export default App;
