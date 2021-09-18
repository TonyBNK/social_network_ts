import React from "react";
import {Header} from "./Header";
import {setAuthUserData} from "../../redux/authReducer";
import {connect} from "react-redux";
import {AuthUserMTSPType, AuthUserPropsType} from "../../types/authUserTypes";
import {RootStateType} from "../../redux/store";
import {authAPI} from "../../api/api";


class HeaderContainer extends React.Component<AuthUserPropsType> {
    componentDidMount() {
        authAPI.getUsersAuth().then(data => {
                if (data.resultCode === 0) {
                    const {id, login, email} = data.data;
                    this.props.setAuthUserData(id, login, email);
                }
            })
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);