import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {
    AuthUserMTSPType,
    AuthUserPropsType, logOut,
    setAuthUserData
} from "../../bll/reducers/authReducer";
import {RootStateType} from "../../bll/store";


class HeaderContainer extends React.Component<AuthUserPropsType> {
    componentDidMount() {
        this.props.setAuthUserData();
    }

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
    setAuthUserData,
    logOut
})(HeaderContainer);