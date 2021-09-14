import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {
    changeCurrentPageAC,
    followUnfollowAC, setUsersAC, setUsersTotalCountAC, UsersDispatchPropsType,
    UsersPageActionsType, UsersStatePropsType,
    UserType
} from "../../redux/usersReducer";
import {StateType} from "../../redux/store-redux";


const mapStateToProps = (state: StateType): UsersStatePropsType => ({
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    usersTotalCount: state.usersPage.usersTotalCount
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
    }
});

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
