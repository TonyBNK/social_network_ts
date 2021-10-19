import {RootStateType} from "../store";
import {createSelector} from "reselect";
import {UserType} from "../../types/types";


const getUsersSelector = (state: RootStateType): Array<UserType> => {
    return state.usersPage.users;
}

export const getUsers = createSelector(getUsersSelector, (users) => {
   return users.filter(user => user);
});

export const getCurrentPage = (state: RootStateType): number => {
    return state.usersPage.currentPage;
}

export const getPageSize = (state: RootStateType): number => {
    return state.usersPage.pageSize;
}

export const getUsersTotalCount = (state: RootStateType): number => {
    return state.usersPage.usersTotalCount;
}

export const getFetching = (state: RootStateType): boolean => {
    return state.usersPage.isFetching;
}

export const getFollowingProgress = (state: RootStateType): Array<number> => {
    return state.usersPage.followingProgress;
}
