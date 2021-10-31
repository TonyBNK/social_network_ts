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
    getUserStatus, saveProfile, setEditMode,
    updateMyPhoto,
    updateMyStatus
} from "../../bll/thunks/thunks";


class ProfileContainer extends React.Component<ProfileInfoWithPathParamsType> {
    refreshProfile() {
        const {history, getUserProfile, getUserStatus} = this.props;

        let userId = +this.props.match.params.userId;

        if (!userId) {
            userId = +this.props.userId!;
            if (!userId) {
                history.push('/login');
            }
        }

        getUserProfile(userId);
        getUserStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: Readonly<ProfileInfoWithPathParamsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render = () => {
        const {profile, status, updateMyStatus, updateMyPhoto, ...restProps} = this.props;

        return <Profile
            {...restProps}
            profile={profile}
            status={status}
            updateMyStatus={updateMyStatus}
            updateMyPhoto={updateMyPhoto}
            isOwner={!this.props.match.params.userId}
        />
    }
}

const mapStateToProps = (state: RootStateType): ProfileInfoStateType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId,
    editMode: state.app.editMode
});

export default compose<ComponentType>(
    connect<ProfileInfoStateType, ProfileInfoDispatchType, {}, RootStateType>(mapStateToProps, {
        getUserProfile,
        getUserStatus,
        updateMyStatus,
        updateMyPhoto,
        saveProfile,
        setEditMode
    }),
    withRouter,
    withAuthRedirect,
    React.memo
)(ProfileContainer);