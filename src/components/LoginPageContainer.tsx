import React, {ComponentType} from "react";
import {LoginPage} from "./LoginPage";
import {connect} from "react-redux";
import {compose} from "redux";
import {withProfileRedirect} from "../hoc/withProfileRedirect";
import {LoginPageDispatchType} from "../bll/reducers/authReducer";
import {logIn} from "../bll/thunks/thunks";
import {RootStateType} from "../bll/store";


class LoginPageContainer extends React.PureComponent<LoginPageDispatchType>{

    render = () => {
        return <LoginPage
            logIn={this.props.logIn}/>
    }
}

export default compose<ComponentType>(
    withProfileRedirect,
    connect<{}, LoginPageDispatchType, {}, RootStateType>(null, {logIn})
)(LoginPageContainer);