import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Profile} from "./components/Profile/Profile";
import logo from './images/logo.png'
import {Route} from "react-router-dom";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {StoreType} from "./redux/state";



export type AppPropsType = {
    store: StoreType
}
function App(props: AppPropsType) {

    const state = props.store.getState();

    return (
        <div className="app-wrapper">
            <Header logotype={logo}/>
            <Sidebar friends={props.store.getState().friendsPage.friends}/>

            <Route path='/profile' render={() => <Profile profilePageState={state.profilePage}
                                                          setNewPost={props.store.setNewPost.bind(props.store)}
                                                          addNewPost={props.store.addNewPost.bind(props.store)}/>}/>
            <Route path='/dialogs' render={() => <Dialogs dialogsPageState={state.dialogsPage}
                                                          setNewMessage={props.store.setNewMessage.bind(props.store)}
                                                          addNewMessage={props.store.addNewMessage.bind(props.store)}/>}/>
            <Route path='/news' render={() => <News/>}/>
            <Route path='/music' render={() => <Music/>}/>
            <Route path='/settings' render={() => <Settings/>}/>
        </div>
    );
}

export default App;
