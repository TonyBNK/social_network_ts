import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {
    followUnfollowAC, setUsersAC,
    UsersPageActionsType,
    UserType
} from "../../redux/usersReducer";
import {StateType} from "../../redux/store-redux";

const mapStateToProps = (state: StateType) => ({
    users: state.usersPage.users
});

const mapDispatchToProps = (dispatch: (action: UsersPageActionsType) => void) => ({
    followUnfollow: (id: string) => {
        dispatch(followUnfollowAC(id));
    },
    setUsers: (users: Array<UserType>) => {
        dispatch(setUsersAC(users));
    }
});

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
