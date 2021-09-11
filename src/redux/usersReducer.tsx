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

export type UsersPageType = {
    users: Array<UserType>
}

export type UsersDispatchPropsType = {
    followUnfollow: (id: number) => void,
    setUsers: (users: Array<UserType>) => void
}

export type UsersPageActionsType =
    ReturnType<typeof followUnfollowAC>
    | ReturnType<typeof setUsersAC>;

const initialState: UsersPageType = {
    users: []
}

export const followUnfollowAC = (id: number) => ({
    type: 'FOLLOW-UNFOLLOW',
    userId: id
} as const);

export const setUsersAC = (users: Array<UserType>) => ({
    type: 'SET-USERS',
    users
} as const);

const usersReducer = (state: UsersPageType = initialState, action: UsersPageActionsType): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW-UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u =>
                    u.id === action.userId ? {...u, followed: !u.followed} : u
                )
            }
        case "SET-USERS":
            return {
                ...state,
                users: action.users
            }
        default:
            return state
    }
}

export default usersReducer;