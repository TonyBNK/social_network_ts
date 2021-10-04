import React from "react";
import {connect} from "react-redux";
import {
    changeCurrentPage,
    follow,
    unfollow,
    setUsers,
    setUsersTotalCount,
    UsersDispatchPropsType,
    UsersStatePropsType, setFollowingProgress
} from "../../bll/reducers/usersReducer";
import {RootStateType} from "../../bll/store";
import {Users} from "./Users";
import {Preloader} from "../Preloader/Preloader";


type UsersPropsType = UsersStatePropsType & UsersDispatchPropsType;

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
            this.props.setUsers(this.props.currentPage, this.props.pageSize)
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
                changeCurrentPage={this.props.changeCurrentPage}
                followingProgress={this.props.followingProgress}
                setFollowingProgress={this.props.setFollowingProgress}
            />
        </div>
    }
}

const mapStateToProps = (state: RootStateType): UsersStatePropsType => ({
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    usersTotalCount: state.usersPage.usersTotalCount,
    isFetching: state.usersPage.isFetching,
    followingProgress: state.usersPage.followingProgress
});

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    changeCurrentPage,
    setUsersTotalCount,
    setFollowingProgress
})(UsersContainer);
