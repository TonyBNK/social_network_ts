export type UserType = {
    id: number,
    name: string,
    photos: {
        small: string,
        large: string
    },
    followed: boolean,
    address: {
        country: string,
        city: string
    },
    status: string
}
export type UsersStatePropsType = {
    users: Array<UserType>
    currentPage: number
    usersTotalCount: number
    pageSize: number
    isFetching: boolean
    followingProgress: Array<number>
}

export type UsersDispatchPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void
    changeCurrentPage: (currentPage: number) => void
    setUsersTotalCount: (usersTotalCount: number) => void
    setFetching: (fetching: boolean) => void
    setFollowingProgress: (isFetching: boolean, buttonId: number) => void
}

export type UsersPageActionsType =
    ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof changeCurrentPage>
    | ReturnType<typeof setUsersTotalCount>
    | ReturnType<typeof setFetching>
    | ReturnType<typeof setFollowingProgress>;

const initialState: UsersStatePropsType = {
    users: [],
    currentPage: 1,
    usersTotalCount: 0,
    pageSize: 10,
    isFetching: false,
    followingProgress: []
}

export const follow = (id: number) => ({
    type: 'FOLLOW',
    userId: id
} as const);

export const unfollow = (id: number) => ({
    type: 'UNFOLLOW',
    userId: id
} as const);

export const setUsers = (users: Array<UserType>) => ({
    type: 'SET-USERS',
    users
} as const);

export const changeCurrentPage = (currentPage: number) => ({
    type: 'CHANGE-CURRENT-PAGE',
    currentPage
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

const usersReducer = (state: UsersStatePropsType = initialState, action: UsersPageActionsType):
    UsersStatePropsType => {
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
                currentPage: action.currentPage
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