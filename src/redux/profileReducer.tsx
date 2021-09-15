import {v1} from "uuid";
import cat_with_glasses from "../images/cat_with_glasses.jpg";
import cat_with_tongue from "../images/cat_with_tongue.jpg";
import angry_cat from "../images/angry_cat.webp";
import React from "react";
import {RouteComponentProps} from "react-router-dom";



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
    newPostText: string
}
export type ProfileInfoStateType = {
    profile: UserProfileType | null
}
export type ProfileStateType = PostsStateType & ProfileInfoStateType;

export type PostsDispatchType = {
    setNewPost: (text: string) => void
    addNewPost: () => void
}
export type ProfileInfoDispatchType = {
    setUserProfile: (profile: UserProfileType) => void
}
export type ProfileDispatchType = PostsDispatchType & ProfileInfoDispatchType;

export type PostsType = PostsStateType & PostsDispatchType;
export type ProfileInfoType = ProfileInfoStateType & ProfileInfoDispatchType;

export type ProfilePageType = PostsType & ProfileInfoType;

type PostsActionsType =
    ReturnType<typeof setNewPost>
    | ReturnType<typeof addNewPost>;
type ProfileInfoActionsType = ReturnType<typeof setUserProfile>;
export type ProfileActionsType = PostsActionsType | ProfileInfoActionsType;

export type ProfileInfoWithPathParamsType = RouteComponentProps<PathParamsType> & ProfileInfoType;


export const setNewPost = (text: string) => ({
    type: "SET-NEW-POST",
    postText: text
} as const);
export const addNewPost = () => ({type: "ADD-NEW-POST"} as const);
export const setUserProfile = (profile: UserProfileType) => ({
    type: 'SET-USER-PROFILE',
    profile
} as const);

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
    newPostText: '',
    profile: null
}

const profileReducer = (state: ProfileStateType = initialState, action: ProfileActionsType):
    ProfileStateType => {
    switch (action.type) {
        case "SET-NEW-POST":
            return {
                ...state,
                newPostText: action.postText,
            };
        case "ADD-NEW-POST":
            return {
                ...state,
                posts: [
                    {
                        id: v1(),
                        ava: cat_with_glasses,
                        post: state.newPostText,
                        likesCount: 0
                    },
                    ...state.posts
                ],
                newPostText: ''
            };
        case "SET-USER-PROFILE":
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}

export default profileReducer;