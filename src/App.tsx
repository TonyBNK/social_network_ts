import React, {ComponentType} from 'react';
import './App.module.scss';
import {Sidebar} from "./components/Sidebar/Sidebar";
import {
    BrowserRouter,
    Redirect,
    Route,
    Switch,
    withRouter
} from "react-router-dom";
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
import {Layout} from "antd";
import 'antd/dist/antd.css';
import c from "./App.module.scss";
import {FriendsContainer} from "./components/Friends/FriendsContainer";

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const LoginPageContainer = React.lazy(() => import('./components/Login/LoginPageContainer'));


const {Content, Sider} = Layout;

class App extends React.Component<InitializeType> {
    catchAllUnhandledErrors = () => {
        alert('Some error occurred');
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.isInitialize) {
            return <Preloader/>
        }

        return (
            <Layout className={c.mainContainer}>
                <HeaderContainer/>
                <Layout className={c.bodyContainer}>
                    <Sider className={c.sider}>
                        <Sidebar/>
                        {
                            this.props.isAuth && <FriendsContainer/>
                        }
                    </Sider>
                    <Content>
                        <React.Suspense fallback={<Preloader/>}>
                            <Switch>
                                <Route
                                    exact path={'/'}
                                    render={() => <Redirect to={'/profile'}/>}
                                />
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
                                    render={() => <UsersContainer/>}/>
                                <Route
                                    path='/login'
                                    render={() => <LoginPageContainer/>}
                                />
                                <Route
                                    path='/:news'
                                    render={() => <News/>}
                                />
                                <Route
                                    path='/:music'
                                    render={() => <Music/>}
                                />
                                <Route
                                    path='/:settings'
                                    render={() => <Settings/>}
                                />
                                <Route
                                    path='*'
                                    render={() => <h2>404 NOT FOUND</h2>}
                                />
                            </Switch>
                        </React.Suspense>
                    </Content>
                </Layout>
            </Layout>
            // <div className="app-wrapper">
            //     <HeaderContainer/>
            //     <Sidebar/>
            //     <React.Suspense fallback={<Preloader/>}>
            //         <Switch>
            //             <Route
            //                 exact path={'/'}
            //                 render={() => <Redirect to={'/profile'}/>}
            //             />
            //             <Route
            //                 path='/profile/:userId?'
            //                 render={() => <ProfileContainer/>}
            //             />
            //             <Route
            //                 path='/dialogs'
            //                 render={() => <DialogsContainer/>}
            //             />
            //             <Route
            //                 path={'/users'}
            //                 render={() => <UsersContainer/>}
            //             />
            //             <Route
            //                 path='/login'
            //                 render={() => <LoginPageContainer/>}
            //             />
            //             <Route
            //                 path='/news'
            //                 render={() => <News/>}
            //             />
            //             <Route
            //                 path='/music'
            //                 render={() => <Music/>}
            //             />
            //
            //             <Route
            //                 path='/settings'
            //                 render={() => <Settings/>}
            //             />
            //             <Route
            //                 path='*'
            //                 render={() => <h2>404 NOT FOUND</h2>}
            //             />
            //         </Switch>
            //     </React.Suspense>
            // </div>
        );
    }
}

const mapStateToProps = (state: RootStateType): InitializeStateType => ({
    isInitialize: state.app.isInitialize,
    editMode: state.app.editMode,
    isAuth: state.auth.isAuth
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
