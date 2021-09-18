import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {setAuthUserData} from "../../redux/authReducer";
import {connect} from "react-redux";
import {AuthUserMTSPType, AuthUserPropsType} from "../../types/authUserTypes";
import {RootStateType} from "../../redux/store";


class HeaderContainer extends React.Component<AuthUserPropsType> {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true
            })
            .then(response => {
                debugger
                if (response.data.resultCode === 0) {
                    const {id, login, email} = response.data.data;
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