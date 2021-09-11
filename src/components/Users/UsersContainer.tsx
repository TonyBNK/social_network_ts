import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {
    followUnfollowAC, setUsersAC, UsersDispatchPropsType,
    UsersPageActionsType, UsersPageType,
    UserType
} from "../../redux/usersReducer";
import {StateType} from "../../redux/store-redux";


const mapStateToProps = (state: StateType): UsersPageType => ({
    users: state.usersPage.users
});

const mapDispatchToProps = (dispatch: (action: UsersPageActionsType) => void): UsersDispatchPropsType => ({
    followUnfollow: (id: number) => {
        dispatch(followUnfollowAC(id));
    },
    setUsers: (users: Array<UserType>) => {
        dispatch(setUsersAC(users));
    }
});

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
