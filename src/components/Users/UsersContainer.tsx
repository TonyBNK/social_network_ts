import React from "react";
import {connect} from "react-redux";
import {
    changeCurrentPageAC,
    followUnfollowAC,
    setFetchingAC,
    setUsersAC,
    setUsersTotalCountAC,
    UsersDispatchPropsType,
    UsersPageActionsType,
    UsersStatePropsType,
    UserType
} from "../../redux/usersReducer";
import {StateType} from "../../redux/store-redux";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../Preloader/Preloader";


type UsersPropsType = UsersStatePropsType & UsersDispatchPropsType;

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.setFetching(true)
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setFetching(false);
                    this.props.setUsers(response.data.items);
                    this.props.setUsersTotalCount(response.data.totalCount);
                });
        }
    }

    changeCurrentPage = (page: number) => {
        this.props.setFetching(true);
        this.props.changeCurrentPage(page);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFetching(false);
                this.props.setUsers(response.data.items)
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
                followUnfollow={this.props.followUnfollow}
                changeCurrentPage={this.changeCurrentPage}
            />
        </div>
    }
}

const mapStateToProps = (state: StateType): UsersStatePropsType => ({
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    usersTotalCount: state.usersPage.usersTotalCount,
    isFetching: state.usersPage.isFetching
});

const mapDispatchToProps = (dispatch: (action: UsersPageActionsType) => void):
    UsersDispatchPropsType => ({
    followUnfollow: (id: number) => {
        dispatch(followUnfollowAC(id));
    },
    setUsers: (users: Array<UserType>) => {
        dispatch(setUsersAC(users));
    },
    changeCurrentPage: (currentPage: number) => {
        dispatch(changeCurrentPageAC(currentPage))
    },
    setUsersTotalCount: (usersTotalCount: number) => {
        dispatch(setUsersTotalCountAC(usersTotalCount))
    },
    setFetching: (fetching: boolean) => {
        dispatch(setFetchingAC(fetching));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
