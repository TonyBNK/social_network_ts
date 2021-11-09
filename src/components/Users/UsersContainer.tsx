import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {RootStateType} from "../../bll/store";
import {Users} from "./Users";
import {Preloader} from "../Preloader/Preloader";
import {
    getCurrentPage,
    getFetching,
    getFollowingProgress,
    getUsers,
    getUsersTotalCount
} from "../../bll/selectors/usersSelector";
import {compose} from "redux";
import {
    UsersDispatchType,
    UsersPropsType,
    UsersStateType
} from "../../types/types";
import {
    setFollowingProcess,
    setUsersTotalCount
} from "../../bll/actions/actions";
import {followUser, requestUsers, unfollowUser} from "../../bll/thunks/thunks";


class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        const {requestUsers, currentPage, pageSize} = this.props;
        requestUsers(currentPage, pageSize);
    }

    render = () => {
        const {
            isFetching,
            users,
            currentPage,
            usersTotalCount,
            followUser,
            unfollowUser,
            followingInProgress,
            requestUsers
        } = this.props;

        return <div>
            {isFetching ? <Preloader/> : null}
            <Users
                users={users}
                currentPage={currentPage}
                usersTotalCount={usersTotalCount}
                follow={followUser}
                unfollow={unfollowUser}
                requestUsers={requestUsers}
                followingInProgress={followingInProgress}
            />
        </div>
    }
}

const mapStateToProps = (state: RootStateType): UsersStateType => ({
    users: getUsers(state),
    currentPage: getCurrentPage(state),
    usersTotalCount: getUsersTotalCount(state),
    isFetching: getFetching(state),
    followingInProgress: getFollowingProgress(state)
});

export default compose<ComponentType>(
    connect<UsersStateType, UsersDispatchType, {}, RootStateType>(
        mapStateToProps, {
            followUser,
            unfollowUser,
            setFollowingProcess,
            requestUsers,
            setUsersTotalCount
        }
    ),
    React.memo
)(UsersContainer);
