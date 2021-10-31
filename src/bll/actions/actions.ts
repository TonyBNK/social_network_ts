import {Nullable, UserProfileType, UserType} from "../../types/types";


export const setAuthenticated = (
    userId: Nullable<number>, login: Nullable<string>,
    email: Nullable<string>, isAuth: boolean
) => {
    return {
        type: 'social_network/auth/SET_AUTHENTICATED',
        payload: {
            userId,
            login,
            email,
            isAuth
        }
    } as const
};
export const setInitialized = () => ({
    type: 'social_network/app/SET_INITIALIZED'
} as const);
export const addNewMessage = (newMessageText: string) => ({
    type: "social_network/dialogs/ADD_NEW_MESSAGE",
    newMessageText
} as const);
export const addNewPost = (newPostText: string) => ({
    type: "social_network/profile/ADD_NEW_POST",
    newPostText
} as const);
export const getUser = (profile: UserProfileType) => ({
    type: 'social_network/profile/GET_USER',
    profile
} as const);
export const setMyStatus = (status: string | null) => ({
    type: 'social_network/profile/SET_MY_STATUS',
    status
} as const);
export const follow = (userId: number) => ({
    type: 'social_network/users/FOLLOW',
    userId
} as const);
export const unfollow = (userId: number) => ({
    type: 'social_network/users/UNFOLLOW',
    userId
} as const);
export const showUsers = (users: Array<UserType>) => ({
    type: 'social_network/users/SHOW_USERS',
    users
} as const);
export const changeCurrentPage = (currentPage: number, pageSize: number) => ({ // TODO: delete page size
    type: 'social_network/users/CHANGE_CURRENT_PAGE',
    currentPage,
    pageSize
} as const);
export const setUsersTotalCount = (usersTotalCount: number) => ({
    type: 'social_network/users/SET_USERS_TOTAL_COUNT',
    usersTotalCount
} as const);
export const setFetching = (isFetching: boolean) => ({
    type: 'social_network/users/SET_FETCHING',
    isFetching
} as const);
export const setFollowingProcess = (isFetching: boolean, buttonId: number) => ({
    type: 'social_network/users/SET_FOLLOWING_PROCESS',
    isFetching,
    buttonId
} as const);