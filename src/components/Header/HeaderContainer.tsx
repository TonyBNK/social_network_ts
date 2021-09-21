import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {
    AuthUserMTSPType,
    AuthUserPropsType,
    setAuthUserData
} from "../../redux/authReducer";
import {RootStateType} from "../../redux/store";


class HeaderContainer extends React.Component<AuthUserPropsType> {
    componentDidMount() {
        this.props.setAuthUserData();
    }

    render() {
        return <Header
            login={this.props.login}
            isAuth={this.props.isAuth}/>
    }
}

const mapStateToProps = (state: RootStateType): AuthUserMTSPType => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {
    setAuthUserData
})(HeaderContainer);