import React, {ComponentType} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootStateType} from "../../bll/store";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    ProfileInfoDispatchType,
    ProfileInfoStateType,
    ProfileInfoWithPathParamsType
} from "../../types/types";
import {
    getUserProfile,
    getUserStatus,
    updateMyStatus
} from "../../bll/thunks/thunks";


class ProfileContainer extends React.Component<ProfileInfoWithPathParamsType> {
    componentDidMount() {
        const {history, getUserProfile, getUserStatus} = this.props;

        let userId = this.props.match.params.userId;

        if (!userId){
            userId = this.props.userId!.toString();
            if (!userId){
                history.push('/login');
            }
        }

        getUserProfile(userId);
        getUserStatus(userId);
    }

    render = () => {
        const {profile, status, updateMyStatus, ...restProps} = this.props;

        return <Profile
            {...restProps}
            profile={profile}
            status={status}
            updateMyStatus={updateMyStatus}/>
    }
}

const mapStateToProps = (state: RootStateType): ProfileInfoStateType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId
});

export default compose<ComponentType>(
    connect<ProfileInfoStateType, ProfileInfoDispatchType, {}, RootStateType>(mapStateToProps, {
        getUserProfile,
        getUserStatus,
        updateMyStatus
    }),
    withRouter,
    withAuthRedirect,
    React.memo
)(ProfileContainer);