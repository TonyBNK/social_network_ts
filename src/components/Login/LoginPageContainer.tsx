import React, {ComponentType} from "react";
import {LoginPage} from "./LoginPage";
import {connect} from "react-redux";
import {compose} from "redux";
import {withProfileRedirect} from "../../hoc/withProfileRedirect";
import {logIn} from "../../redux/thunks/thunks";
import {RootStateType} from "../../redux/store";
import {LoginPageDispatchType, Nullable} from "../../types/types";


class LoginPageContainer extends React.PureComponent<LoginPageDispatchType & { captchaURL: Nullable<string> }> {

    render = () => {
        return <LoginPage
            captchaURL={this.props.captchaURL}
            logIn={this.props.logIn}/>
    }
}

const mapStateToProps = (state: RootStateType): { captchaURL: Nullable<string> } => ({
    captchaURL: state.auth.captchaURL
});

export default compose<ComponentType>(
    withProfileRedirect,
    connect<{ captchaURL: Nullable<string> }, LoginPageDispatchType, {}, RootStateType>(mapStateToProps, {logIn})
)(LoginPageContainer);