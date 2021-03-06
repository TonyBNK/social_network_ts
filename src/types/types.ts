import {
    addNewMessage,
    addNewPost,
    changeCurrentPage, changePageSize,
    follow, getCaptcha,
    getUser,
    setAuthenticated, setEdit,
    setFetching,
    setFollowingProcess,
    setInitialized,
    setMyPhoto,
    setMyStatus,
    setUsersTotalCount,
    showUsers,
    unfollow
} from "../redux/actions/actions";
import {AppThunkType} from "../redux/store";
import {Dispatch} from "react";
import {FormDataType} from "../components/Login/LoginPage";
import {RouteComponentProps} from "react-router-dom";
import {ResultCodes} from "../api/api";

// Common types
export type Nullable<T> = T | null;

// App types
export type InitializeStateType = {
    isInitialize: boolean
    editMode: boolean
    isAuth: boolean
}
export type InitializeDispatchType = {
    initializeApp: () => AppThunkType
}
export type InitializeActionType =
    ReturnType<typeof setInitialized>
    | ReturnType<typeof setEdit>;
export type InitializeType = InitializeStateType & InitializeDispatchType;
export type InitializeThunkType = () => (dispatch: Dispatch<InitializeActionType>) => void

// Auth types
export type AuthActionType =
    ReturnType<typeof setAuthenticated>
    | ReturnType<typeof getCaptcha>;
export type UserAuthStateType = {
    userId: Nullable<number>
    login: Nullable<string>
    email: Nullable<string>
    isAuth: boolean
    captchaURL: Nullable<string>
};
export type AuthMeType = {
    id: number
    login: string
    email: string
};
export type LoginType = {
    userId: number
};
export type AuthUserMTSPType = {
    login: Nullable<string>
    isAuth: boolean
};
export type AuthUserMDTPType = {
    logOut: () => void
};
export type LoginPageDispatchType = {
    logIn: (formData: FormDataType) => void
};
export type AuthUserPropsType = AuthUserMTSPType & AuthUserMDTPType;

// Dialogs types
export type DialogType = {
    id: string
    ava: string
    name: string
};
export type MessageType = {
    id: string
    message: string
};
export type DialogsPageStateType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
};
export type DialogsPageDispatchType = {
    addNewMessage: (newMessageText: string) => DialogsActionType
};
export type DialogsOwnType = {};
export type DialogsPropsType =
    DialogsPageStateType
    & DialogsPageDispatchType
    & DialogsOwnType;
export type DialogsActionType = ReturnType<typeof addNewMessage>;

// Profile types
export type PostType = {
    id: string
    ava: string
    name: string
    post: string
    likesCount: number
}
export type UserProfileType = {
    aboutMe?: Nullable<string>
    contacts?: {
        facebook: Nullable<string>
        website: Nullable<string>
        vk: Nullable<string>
        twitter: Nullable<string>
        instagram: Nullable<string>
        youtube: Nullable<string>
        github: Nullable<string>
        mainLink: Nullable<string>
    },
    lookingForAJob?: boolean
    lookingForAJobDescription?: Nullable<string>
    fullName?: string
    userId?: number
    photos?: {
        small: Nullable<string>
        large: Nullable<string>
    }
};
export type PathParamsType = {
    userId: string
};
export type PostsStateType = {
    posts: Array<PostType>
};
export type ProfileInfoStateType = {
    profile: UserProfileType
    status?: string
    userId: Nullable<number>
    editMode: boolean
};
export type ProfileStateType = PostsStateType & ProfileInfoStateType;
export type PostsDispatchType = {
    addNewPost: (text: string) => void
};
export type ProfileInfoDispatchType = {
    getUserProfile: (userId: Nullable<number>) => void
    getUserStatus: (userId: Nullable<number>) => void
    updateMyStatus: (newStatus?: string) => void
    updateMyPhoto: (newPhoto: File) => void
    saveProfile: (profile: UserProfileType) => void
    setEditMode: (isEdit: boolean) => void
};
export type ProfileDispatchType = PostsDispatchType & ProfileInfoDispatchType;
export type PostsType = PostsStateType & PostsDispatchType;
export type ProfileInfoType = ProfileInfoStateType & ProfileInfoDispatchType;
export type PostsActionType = ReturnType<typeof addNewPost>;
export type ProfileInfoActionType =
    ReturnType<typeof getUser>
    | ReturnType<typeof setMyStatus>
    | ReturnType<typeof setMyPhoto>;
export type ProfileActionType = PostsActionType | ProfileInfoActionType;
export type ProfileInfoWithPathParamsType =
    RouteComponentProps<PathParamsType>
    & ProfileInfoType;

// Users types
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
    pageSize?: number
    isFetching: boolean
    followingInProgress: Array<number>
}
export type UsersDispatchType = {
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    requestUsers: (page: number, pageSize?: number) => void
    setUsersTotalCount: (usersTotalCount: number) => void
    setFollowingProcess: (isFetching: boolean, buttonId: number) => void
}
export type GetUsersResponseType = {
    items: Array<UserType>
    totalCount: number
    error: Nullable<string>
}
export type DefaultResponseType<T = {}> = {
    data: T,
    messages: Array<string>
    fieldsErrors: Array<string>
    resultCode: ResultCodes
}
export type UsersPropsType = UsersStateType & UsersDispatchType;
export type UsersPageActionType =
    ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof showUsers>
    | ReturnType<typeof changeCurrentPage>
    | ReturnType<typeof changePageSize>
    | ReturnType<typeof setUsersTotalCount>
    | ReturnType<typeof setFetching>
    | ReturnType<typeof setFollowingProcess>;
export type UsersACType = typeof follow | typeof unfollow;
export type FollowUnfollowFlowDispatchType = (action: UsersPageActionType) => void;
export type FollowUnfollowFlowAPIMethodType = (userId: number) => Promise<DefaultResponseType | undefined>;