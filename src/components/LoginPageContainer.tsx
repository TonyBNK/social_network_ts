import React, {ComponentType} from "react";
import {LoginPage} from "./LoginPage";
import {connect} from "react-redux";
import {compose} from "redux";
import {withProfileRedirect} from "../hoc/withProfileRedirect";
import {LogInType} from "../bll/reducers/authReducer";
import {logIn} from "../bll/thunks/thunks";


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