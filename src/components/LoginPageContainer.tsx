import React, {ComponentType} from "react";
import {LoginPage} from "./LoginPage";
import {connect} from "react-redux";
import {compose} from "redux";
import {withProfileRedirect} from "../hoc/withProfileRedirect";
import {logIn, LogInType} from "../redux/authReducer";


type LogInUserMDTPType = {
    logIn: LogInType
}

class LoginPageContainer extends React.Component<LogInUserMDTPType>{

    render = () => {
        return <LoginPage
            logIn={this.props.logIn}/>
    }
}

export default compose<ComponentType>(
    withProfileRedirect,
    connect(null, {logIn})
)(LoginPageContainer);