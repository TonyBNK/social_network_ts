import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    ProfileInfoStateType,
    ProfileInfoWithPathParamsType,
    setUserProfile
} from "../../redux/profileReducer";
import axios from "axios";
import {RootStateType} from "../../redux/store";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component<ProfileInfoWithPathParamsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = '2';
        }

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
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