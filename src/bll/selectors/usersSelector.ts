import {RootStateType} from "../store";
import {UserType} from "../reducers/usersReducer";

export const getUsers = (state: RootStateType): Array<UserType> => {
    return state.usersPage.users;
}

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
