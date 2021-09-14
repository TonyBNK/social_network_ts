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
}

export type UsersDispatchPropsType = {
    followUnfollow: (id: number) => void,
    setUsers: (users: Array<UserType>) => void,
    changeCurrentPage: (currentPage: number) => void,
    setUsersTotalCount: (usersTotalCount: number) => void
}

export type UsersPageActionsType =
    ReturnType<typeof followUnfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof changeCurrentPageAC>
    | ReturnType<typeof setUsersTotalCountAC>;

const initialState: UsersStatePropsType = {
    users: [],
    currentPage: 1,
    usersTotalCount: 0,
    pageSize: 5
}

export const followUnfollowAC = (id: number) => ({
    type: 'FOLLOW-UNFOLLOW',
    userId: id
} as const);

export const setUsersAC = (users: Array<UserType>) => ({
    type: 'SET-USERS',
    users
} as const);

export const changeCurrentPageAC = (currentPage: number) => ({
    type: 'CHANGE-CURRENT-PAGE',
    currentPage
} as const);

export const setUsersTotalCountAC = (usersTotalCount: number) => ({
    type: 'SET-USERS-TOTAL-COUNT',
    usersTotalCount
} as const);

const usersReducer = (state: UsersStatePropsType = initialState, action: UsersPageActionsType):
    UsersStatePropsType => {
    switch (action.type) {
        case 'FOLLOW-UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u =>
                    u.id === action.userId ? {...u, followed: !u.followed} : u
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
            }
        default:
            return state
    }
}

export default usersReducer;