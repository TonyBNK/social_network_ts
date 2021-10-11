import {followAPI, usersAPI} from "../../api/api";
import {AppThunkType} from "../store";
import {Nullable} from "../../types/nullable";

export type UserType = {
    id: number
    name: string
    uniqueUrlName: Nullable<string>
    photos: {
        small: Nullable<string>
        large: Nullable<string>
    }
    status: Nullable<string>
    followed: boolean
}
export type UsersStateType = {
    users: Array<UserType>
    currentPage: number
    usersTotalCount: number
    pageSize: number
    isFetching: boolean
    followingProgress: Array<number>
}
export type UsersDispatchType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    requestUsers: (page: number, pageSize: number) => void
    setUsersTotalCount: (usersTotalCount: number) => void
    setFollowingProgress: (isFetching: boolean, buttonId: number) => void
}
export type GetUsersResponseType = {
    items: Array<UserType>
    totalCount: number
    error: Nullable<string>
}
export type DefaultResponseType = {
    data: {},
    messages: Array<string>
    fieldsErrors: Array<string>
    resultCode: number
}

export type UsersPropsType = UsersStateType & UsersDispatchType;

export type UsersPageActionsType =
    ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsersSuccess>
    | ReturnType<typeof changeCurrentPageSuccess>
    | ReturnType<typeof setUsersTotalCount>
    | ReturnType<typeof setFetching>
    | ReturnType<typeof setFollowingProgress>;

const initialState: UsersStateType = {
    users: [],
    currentPage: 1,
    usersTotalCount: 0,
    pageSize: 10,
    isFetching: false,
    followingProgress: []
}

export const followSuccess = (id: number) => ({
    type: 'FOLLOW',
    userId: id
} as const);
export const unfollowSuccess = (id: number) => ({
    type: 'UNFOLLOW',
    userId: id
} as const);
export const setUsersSuccess = (users: Array<UserType>) => ({
    type: 'SET-USERS',
    users
} as const);
export const changeCurrentPageSuccess = (currentPage: number, pageSize: number) => ({
    type: 'CHANGE-CURRENT-PAGE',
    currentPage,
    pageSize
} as const);
export const setUsersTotalCount = (usersTotalCount: number) => ({
    type: 'SET-USERS-TOTAL-COUNT',
    usersTotalCount
} as const);
export const setFetching = (fetching: boolean) => ({
    type: 'SET-FETCHING',
    fetching
} as const);
export const setFollowingProgress = (isFetching: boolean, buttonId: number) => ({
    type: 'SET-FOLLOWING-PROGRESS',
    isFetching,
    buttonId
} as const);

export const follow = (userId: number): AppThunkType => {
    return (dispatch) => {
        dispatch(setFollowingProgress(true, userId));
        followAPI
            .followUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userId));
                }
                dispatch(setFollowingProgress(false, userId));
            })
    }
};
export const unfollow = (userId: number): AppThunkType => {
    return (dispatch) => {
        dispatch(setFollowingProgress(true, userId));
        followAPI
            .unfollowUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId));
                }
                dispatch(setFollowingProgress(false, userId));
            })
    }
};
export const requestUsers = (
    page: number,
    pageSize: number
): AppThunkType => {
    return (dispatch) => {
        dispatch(setFetching(true));
        dispatch(changeCurrentPageSuccess(page, pageSize));
        usersAPI
            .getUsers(page, pageSize)
            .then(data => {
                    dispatch(setFetching(false));
                    dispatch(setUsersSuccess(data.items));
                    dispatch(setUsersTotalCount(data.totalCount));
                }
            )
    }
};


export const usersReducer = (state: UsersStateType = initialState, action: UsersPageActionsType):
    UsersStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u =>
                    u.id === action.userId ? {...u, followed: true} : u
                )
            };
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u =>
                    u.id === action.userId ? {...u, followed: false} : u
                )
            };
        case "SET-USERS":
            return {
                ...state,
                users: action.users
            };
        case "CHANGE-CURRENT-PAGE":
            return {
                ...state,
                currentPage: action.currentPage,
                pageSize: action.pageSize
            };
        case "SET-USERS-TOTAL-COUNT":
            return {
                ...state,
                usersTotalCount: action.usersTotalCount
            };
        case "SET-FETCHING":
            return {
                ...state,
                isFetching: action.fetching
            };
        case "SET-FOLLOWING-PROGRESS":
            return {
                ...state,
                followingProgress: action.isFetching
                    ? [...state.followingProgress, action.buttonId]
                    : state.followingProgress.filter(id => id !== action.buttonId)
            }
        default:
            return state
    }
}

export default usersReducer;