import React, {ComponentType} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    ProfileInfoStateType,
    ProfileInfoWithPathParamsType,
    setUserProfile, setUserStatus, updateStatus
} from "../../bll/reducers/profileReducer";
import {RootStateType} from "../../bll/store";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component<ProfileInfoWithPathParamsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId){
            userId = this.props.userId!.toString();
        }

        this.props.setUserProfile(userId);
        this.props.setUserStatus(userId);
    }

    render = () => {
        return <Profile
            {...this.props}
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}/>
    }
}

const mapStateToProps = (state: RootStateType): ProfileInfoStateType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId
});

export default compose<ComponentType>(
    connect(mapStateToProps, {
        setUserProfile,
        setUserStatus,
        updateStatus
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);