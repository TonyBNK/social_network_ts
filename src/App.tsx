import React, {ComponentType} from 'react';
import './App.css';
import {Sidebar} from "./components/Sidebar/Sidebar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./bll/thunks/thunks";
import {RootStateType, store} from "./bll/store";
import {Preloader} from "./components/Preloader/Preloader";
import {InitializeStateType, InitializeType} from "./types/types";

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const LoginPageContainer = React.lazy(() => import('./components/LoginPageContainer'));


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
                <React.Suspense fallback={<Preloader/>}>
                    <Route
                        path='/profile/:userId?'
                        render={() => <ProfileContainer/>}
                    />
                    <Route
                        path='/dialogs'
                        render={() => <DialogsContainer/>}
                    />
                    <Route
                        path={'/users'}
                        render={() => <UsersContainer/>}
                    />
                    <Route
                        path='/login'
                        render={() => <LoginPageContainer/>}
                    />
                </React.Suspense>
                <Route
                    path='/news'
                    render={() => <News/>}
                />
                <Route
                    path='/music'
                    render={() => <Music/>}
                />

                <Route
                    path='/settings'
                    render={() => <Settings/>}
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
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}
