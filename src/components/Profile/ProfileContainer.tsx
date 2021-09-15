import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    ProfileInfoStateType,
    ProfileInfoType,
    setUserProfile
} from "../../redux/profileReducer";
import axios from "axios";
import {RootStateType} from "../../redux/store";


class ProfileContainer extends React.Component<ProfileInfoType> {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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
})(ProfileContainer);