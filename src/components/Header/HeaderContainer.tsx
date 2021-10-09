import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {
    AuthUserMTSPType,
    AuthUserPropsType
} from "../../bll/reducers/authReducer";
import {RootStateType} from "../../bll/store";
import {logOut} from "../../bll/thunks/thunks";


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

export default connect(mapStateToProps, {
    logOut
})(HeaderContainer);