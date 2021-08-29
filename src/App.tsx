import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Profile, ProfilePageType} from "./components/Profile/Profile";
import logo from './images/logo.png'
import {Route} from "react-router-dom";
import {Dialogs, DialogsPageType} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {FriendsPageType} from "./components/Friends/Friends";

export type AppPropsType = {
    state: {
        profilePage: ProfilePageType
        dialogsPage: DialogsPageType
        friendsPage: FriendsPageType
    }
}

function App(props: AppPropsType) {

    return (
        <div className="app-wrapper">
            <Header logotype={logo}/>
            <Sidebar friends={props.state.friendsPage.friends}/>

            <Route path='/profile' render={() => <Profile posts={props.state.profilePage.posts}
                                                          newPostText={props.state.profilePage.newPostText}
                                                          updateNewPostText={props.state.profilePage.updateNewPostText}
                                                          addNewPostText={props.state.profilePage.addNewPostText}/>}/>
            <Route path='/dialogs' render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                          messages={props.state.dialogsPage.messages}
                                                          newMessageText={props.state.dialogsPage.newMessageText}
                                                          updateNewMessageText={props.state.dialogsPage.updateNewMessageText}
                                                          addNewMessageText={props.state.dialogsPage.addNewMessageText}/>}/>
            <Route path='/news' render={() => <News/>}/>
            <Route path='/music' render={() => <Music/>}/>
            <Route path='/settings' render={() => <Settings/>}/>
        </div>
    );
}

export default App;
