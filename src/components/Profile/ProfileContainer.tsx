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
import {profileAPI} from "../../api/api";


class ProfileContainer extends React.Component<ProfileInfoWithPathParamsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        profileAPI.getUsersProfile(userId).then(data => {
                this.props.setUserProfile(data);
            });
    }

    render = () => {
        return <Profile
            {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: RootStateType): ProfileInfoStateType => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, {
    setUserProfile
})(withRouter(ProfileContainer));