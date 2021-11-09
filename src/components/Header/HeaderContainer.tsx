import React, {ComponentType} from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";
import {logOut} from "../../redux/thunks/thunks";
import {compose} from "redux";
import {
    AuthUserMDTPType,
    AuthUserMTSPType,
    AuthUserPropsType
} from "../../types/types";


class HeaderContainer extends React.Component<AuthUserPropsType> {
    render() {
        const {login, isAuth, logOut} = this.props;
        return <Header
            login={login}
            isAuth={isAuth}
            logOut={logOut}/>
    }
}

const mapStateToProps = (state: RootStateType): AuthUserMTSPType => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
});

export default compose<ComponentType>(
    connect<AuthUserMTSPType, AuthUserMDTPType, {}, RootStateType>(
        mapStateToProps, {logOut}
    ),
    React.memo
)(HeaderContainer);