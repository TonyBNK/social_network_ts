import React, {ComponentType} from 'react';
import './App.css';
import {Sidebar} from "./components/Sidebar/Sidebar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPageContainer from "./components/LoginPageContainer";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./bll/thunks/thunks";
import {RootStateType, store} from "./bll/store";
import {Preloader} from "./components/Preloader/Preloader";
import {InitializeStateType, InitializeType} from "./types/types";

class App extends React.Component<InitializeType> {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.isInitialize) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Sidebar/>
                <Route
                    path='/profile/:userId?'
                    render={() => <ProfileContainer/>}
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
                <Route
                    path='/login'
                    render={() => <LoginPageContainer/>}
                />
            </div>
        );
    }
}

const mapStateToProps = (state: RootStateType): InitializeStateType => ({
    isInitialize: state.app.isInitialize
});

const AppContainer = compose<ComponentType>(
    connect(mapStateToProps, {initializeApp}),
    withRouter
)(App);

export const SocialNetworkApp = () => {
    return(
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}
