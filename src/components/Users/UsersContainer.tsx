import React from "react";
import {connect} from "react-redux";
import {
    changeCurrentPage,
    follow,
    unfollow,
    setFetching,
    setUsers,
    setUsersTotalCount,
    UsersDispatchPropsType,
    UsersStatePropsType
} from "../../redux/usersReducer";
import {RootStateType} from "../../redux/store";
import {Users} from "./Users";
import {Preloader} from "../Preloader/Preloader";
import {usersAPI} from "../../api/api";


type UsersPropsType = UsersStatePropsType & UsersDispatchPropsType;

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.setFetching(true)
            usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.setFetching(false);
                this.props.setUsers(data.items);
                this.props.setUsersTotalCount(data.totalCount);
            });
        }
    }

    changeCurrentPage = (page: number) => {
        this.props.setFetching(true);
        this.props.changeCurrentPage(page);
        usersAPI.getUsers(page, this.props.pageSize).then(data => {
            this.props.setFetching(false);
            this.props.setUsers(data.items)
        });
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
                changeCurrentPage={this.changeCurrentPage}
            />
        </div>
    }
}

const mapStateToProps = (state: RootStateType): UsersStatePropsType => ({
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    usersTotalCount: state.usersPage.usersTotalCount,
    isFetching: state.usersPage.isFetching
});

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    changeCurrentPage,
    setUsersTotalCount,
    setFetching
})(UsersContainer);
