import {UsersPageActionType, UsersStateType} from "../../types/types";
import {updateObjectInArray} from "../../utils/utils";


const initialState: UsersStateType = {
    users: [],
    currentPage: 1,
    usersTotalCount: 0,
    pageSize: 10,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state: UsersStateType = initialState, action: UsersPageActionType):
    UsersStateType => {
    switch (action.type) {
        case "social_network/users/FOLLOW":
            return {
                ...state,
                users: updateObjectInArray(
                    state.users,
                    action.userId,
                    'id',
                    {followed: true}
                )
            };
        case "social_network/users/UNFOLLOW":
            return {
                ...state,
                users: updateObjectInArray(
                    state.users,
                    action.userId,
                    'id',
                    {followed: false}
                )
            };
        case "social_network/users/SHOW_USERS":
            return {
                ...state,
                users: action.users
            };
        case "social_network/users/CHANGE_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.currentPage,
                pageSize: action.pageSize
            };
        case "social_network/users/SET_USERS_TOTAL_COUNT":
            return {
                ...state,
                usersTotalCount: action.usersTotalCount
            };
        case "social_network/users/SET_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            };
        case "social_network/users/SET_FOLLOWING_PROCESS":
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.buttonId]
                    : state.followingInProgress.filter(id => id !== action.buttonId)
            }
        default:
            return state
    }
}