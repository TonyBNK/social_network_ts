import React, {ComponentType} from "react";
import {LoginPage} from "./LoginPage";
import {connect} from "react-redux";
import {compose} from "redux";
import {withProfileRedirect} from "../hoc/withProfileRedirect";
import {logIn} from "../bll/thunks/thunks";
import {RootStateType} from "../bll/store";
import {LoginPageDispatchType} from "../types/types";


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