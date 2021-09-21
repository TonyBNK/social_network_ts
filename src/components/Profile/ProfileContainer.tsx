import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    ProfileInfoStateType,
    ProfileInfoWithPathParamsType,
    setUserProfile
} from "../../redux/profileReducer";
import {RootStateType} from "../../redux/store";
import {Redirect, withRouter} from "react-router-dom";


class ProfileContainer extends React.Component<ProfileInfoWithPathParamsType> {
    componentDidMount() {
        this.props.setUserProfile(this.props.match.params.userId)
    }

    render = () => {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>

        return <Profile
            {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: RootStateType): ProfileInfoStateType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {
    setUserProfile
})(withRouter(ProfileContainer));