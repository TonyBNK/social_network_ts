import {v1} from "uuid";
import cat_with_glasses from "../../images/cat_with_glasses.jpg";
import cat_with_tongue from "../../images/cat_with_tongue.jpg";
import angry_cat from "../../images/angry_cat.webp";
import {RouteComponentProps} from "react-router-dom";
import {profileAPI, ResultCodes} from "../../api/api";
import {Nullable} from "../../types/nullable";
import {AppThunkType} from "../store";


type PostType = {
    id: string
    ava: string
    post: string
    likesCount: number
}
export type UserProfileType = {
    aboutMe: Nullable<string>
    contacts: {
        facebook: Nullable<string>
        website: Nullable<string>
        vk: Nullable<string>
        twitter: Nullable<string>
        instagram: Nullable<string>
        youtube: Nullable<string>
        github: Nullable<string>
        mainLink: Nullable<string>
    },
    lookingForAJob: boolean
    lookingForAJobDescription: Nullable<string>
    fullName: string
    userId: number
    photos: {
        small: Nullable<string>
        large: Nullable<string>
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
    userId: Nullable<number>
}
export type ProfileStateType = PostsStateType & ProfileInfoStateType;

export type PostsDispatchType = {
    addNewPost: (text: string) => void
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

export const setUserProfile = (userId = '19542'): AppThunkType => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId).then(profile => {
            dispatch(setUserProfileSuccess(profile));
        });
    }
};
export const setUserStatus = (userId = '19542'): AppThunkType => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId).then(status => {
            dispatch(setUserStatusSuccess(status));
        });
    }
};
export const updateStatus = (newStatus: string): AppThunkType => {
    return (dispatch) => {
        profileAPI.updateMyStatus(newStatus).then(data => {
            if (data.resultCode === ResultCodes.Success)
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
    status: '',
    userId: null
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