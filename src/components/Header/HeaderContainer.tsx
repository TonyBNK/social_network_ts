import React, {ComponentType} from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {
    AuthUserMDTPType,
    AuthUserMTSPType,
    AuthUserPropsType
} from "../../bll/reducers/authReducer";
import {RootStateType} from "../../bll/store";
import {logOut} from "../../bll/thunks/thunks";
import {compose} from "redux";


class HeaderContainer extends React.Component<AuthUserPropsType> {
    render() {
        return <Header
            login={this.props.login}
            isAuth={this.props.isAuth}
            logOut={this.props.logOut}/>
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