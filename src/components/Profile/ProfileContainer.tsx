import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    ProfileInfoStateType,
    ProfileInfoWithPathParamsType,
    setUserProfile
} from "../../redux/profileReducer";
import {RootStateType} from "../../redux/store";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component<ProfileInfoWithPathParamsType> {
    componentDidMount() {
        this.props.setUserProfile(this.props.match.params.userId)
    }

    render = () => {
        return <Profile
            {...this.props}
            profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: RootStateType): ProfileInfoStateType => ({
    profile: state.profilePage.profile
});

export default withAuthRedirect(connect(mapStateToProps, {
    setUserProfile
})(withRouter(ProfileContainer)));