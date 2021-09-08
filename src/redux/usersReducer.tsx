import {v1} from "uuid";
import vsratiy_cat from "../images/vsratiy_cat.jpg";
import doge from "../images/doge.jpg";
import parrot from "../images/parrot.jpg";
import hamster from "../images/hamster.jpg";
import turtle from "../images/turtle.jpg";

export type UserType = {
    id: string,
    name: string,
    ava: string,
    followed: boolean,
    address: {
        country: string,
        city: string
    },
    text: string
}
export type UsersPageType = {
    users: Array<UserType>
}

export type UsersPageActionsType =
    ReturnType<typeof followUnfollowAC>
    | ReturnType<typeof setUsersAC>;

const initialState: UsersPageType = {
    users: []
}

export const followUnfollowAC = (id: string) => ({
    type: 'FOLLOW-UNFOLLOW',
    userId: id
} as const);

export const setUsersAC = (users: Array<UserType>) => ({
    type: 'SET-USERS',
    users
} as const);

const usersReducer = (state = initialState, action: UsersPageActionsType) => {
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