import {v1} from "uuid";
import cat_with_glasses from "../images/cat_with_glasses.jpg";
import cat_with_tongue from "../images/cat_with_tongue.jpg";
import angry_cat from "../images/angry_cat.webp";
import {RouteComponentProps} from "react-router-dom";
import {profileAPI} from "../api/api";


type PostType = {
    id: string
    ava: string
    post: string
    likesCount: number
}
type UserProfileType = {
    aboutMe: string
    contacts: {
        facebook: string,
        website: string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}
type PathParamsType = {
    userId: string
}

export type PostsStateType = {
    posts: Array<PostType>
}
export type ProfileInfoStateType = {
    profile: UserProfileType | null
    status: string
}
export type ProfileStateType = PostsStateType & ProfileInfoStateType;

export type PostsDispatchType = {
    setNewPost: (text: string) => void
    addNewPost: () => void
}
export type ProfileInfoDispatchType = {
    setUserProfile: (userId: string | undefined) => void
    setUserStatus: (userId: string | undefined) => void
    updateStatus: (newStatus: string) => void
}
export type ProfileDispatchType = PostsDispatchType & ProfileInfoDispatchType;

export type PostsType = PostsStateType & PostsDispatchType;
export type ProfileInfoType = ProfileInfoStateType & ProfileInfoDispatchType;

type PostsActionsType = ReturnType<typeof addNewPost>;
type ProfileInfoActionsType =
    ReturnType<typeof setUserProfileSuccess>
    | ReturnType<typeof setUserStatusSuccess>;
export type ProfileActionsType = PostsActionsType | ProfileInfoActionsType;

export type ProfileInfoWithPathParamsType =
    RouteComponentProps<PathParamsType>
    & ProfileInfoType;

type SetUserProfileType = (userId: string) =>
    (dispatch: (action: ProfileInfoActionsType) => void) => void

export const addNewPost = (newPostText: string) => ({
    type: "ADD-NEW-POST",
    newPostText
} as const);
export const setUserProfileSuccess = (profile: UserProfileType) => ({
    type: 'SET-USER-PROFILE',
    profile
} as const);
export const setUserStatusSuccess = (status: string) => ({
    type: 'SET-USER-STATUS',
    status
} as const);

export const setUserProfile: SetUserProfileType = (userId = '19542') => {
    return (dispatch) => {
        profileAPI.getUsersProfile(userId).then(profile => {
            dispatch(setUserProfileSuccess(profile));
        });
    }
};
export const setUserStatus: SetUserProfileType = (userId = '19542') => {
    return (dispatch) => {
        profileAPI.getUsersStatus(userId).then(status => {
            dispatch(setUserStatusSuccess(status));
        });
    }
};
export const updateStatus: SetUserProfileType = (newStatus) => {
    return (dispatch) => {
        profileAPI.updateProfileStatus(newStatus).then(data => {
            if (data.resultCode === 0)
                dispatch(setUserStatusSuccess(newStatus));
        });
    }
};

const initialState: ProfileStateType = {
    posts: [
        {
            id: v1(),
            ava: cat_with_tongue,
            post: "Кто насрал в мой лоток?",
            likesCount: 14
        },
        {
            id: v1(),
            ava: angry_cat,
            post: "Кожанный мешок опять забыл покормить :(",
            likesCount: 23
        },
    ],
    profile: null,
    status: ''
}

const profileReducer = (state: ProfileStateType = initialState, action: ProfileActionsType):
    ProfileStateType => {
    switch (action.type) {
        case "ADD-NEW-POST":
            return {
                ...state,
                posts: [
                    {
                        id: v1(),
                        ava: cat_with_glasses,
                        post: action.newPostText,
                        likesCount: 0
                    },
                    ...state.posts
                ]
            };
        case "SET-USER-PROFILE":
            return {
                ...state,
                profile: action.profile
            }
        case "SET-USER-STATUS":
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export default profileReducer;