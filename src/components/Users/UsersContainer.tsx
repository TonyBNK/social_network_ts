import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {RootStateType} from "../../bll/store";
import {Users} from "./Users";
import {Preloader} from "../Preloader/Preloader";
import {
    getCurrentPage, getFetching, getFollowingProgress,
    getPageSize,
    getUsers, getUsersTotalCount
} from "../../bll/selectors/usersSelector";
import {compose} from "redux";
import {
    UsersDispatchType,
    UsersPropsType,
    UsersStateType
} from "../../types/types";
import {
    follow,
    setFollowingProcess,
    setUsersTotalCount,
    unfollow
} from "../../bll/actions/actions";
import {requestUsers} from "../../bll/thunks/thunks";


class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    render = () => {
        return <div>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                currentPage={this.props.currentPage}
                usersTotalCount={this.props.usersTotalCount}
                pageSize={this.props.pageSize}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                requestUsers={this.props.requestUsers}
                followingProgress={this.props.followingProgress}
                setFollowingProgress={this.props.setFollowingProcess}
            />
        </div>
    }
}

const mapStateToProps = (state: RootStateType): UsersStateType => ({
    users: getUsers(state),
    currentPage: getCurrentPage(state),
    pageSize: getPageSize(state),
    usersTotalCount: getUsersTotalCount(state),
    isFetching: getFetching(state),
    followingProgress: getFollowingProgress(state)
});

export default compose<ComponentType>(
    connect<UsersStateType, UsersDispatchType, {}, RootStateType>(
        mapStateToProps, {
            follow,
            unfollow,
            requestUsers,
            setUsersTotalCount,
            setFollowingProcess
        }
    ),
    React.memo
)(UsersContainer);
