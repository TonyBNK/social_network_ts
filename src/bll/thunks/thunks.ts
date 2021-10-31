import {authAPI, followAPI, profileAPI, usersAPI} from "../../api/api";
import {
    changeCurrentPage,
    follow,
    getUser,
    setAuthenticated, setEdit,
    setFetching,
    setInitialized, setMyPhoto,
    setMyStatus,
    setUsersTotalCount,
    showUsers,
    unfollow
} from "../actions/actions";
import {stopSubmit} from "redux-form";
import {AppThunkType} from "../store";
import {FormDataType} from "../../components/LoginPage";
import {followUnfollowFlow} from "../../utils/utils";
import {Nullable, UserProfileType} from "../../types/types";


export const getUserProfile = (userId: Nullable<number>): AppThunkType =>
    async (dispatch) => {
        try {
            const profile = await profileAPI.getUserProfile(userId);
            profile && dispatch(getUser(profile));
        } catch (e) {
            console.log(e);
        }
    };
export const getUserStatus = (userId: Nullable<number>): AppThunkType =>
    async (dispatch) => {
        try {
            const status = await profileAPI.getUserStatus(userId);
            dispatch(setMyStatus(status));
        } catch (e) {
            console.log(e);
        }
    };
export const updateMyStatus = (newStatus: Nullable<string>): AppThunkType =>
    async (dispatch) => {
        try {
            const response = await profileAPI.updateMyStatus(newStatus);
            if (response && response.data.resultCode === 0) {
                dispatch(setMyStatus(newStatus));
            }
        } catch (e) {
            console.log(e);
        }
    };
export const updateMyPhoto = (newPhoto: File): AppThunkType =>
    async (dispatch) => {
        try {
            const response = await profileAPI.updateMyPhoto(newPhoto);
            if (response && response.data.resultCode === 0) {
                dispatch(setMyPhoto(response.data.data.photos));
            }
        } catch (e) {
            console.log(e);
        }
    };
export const saveProfile = (profile: UserProfileType): AppThunkType =>
    async (dispatch, getState) => {
        try {
            const response = await profileAPI.saveProfile(profile);
            if (response && response.data.resultCode === 0) {
                dispatch(getUserProfile(getState().auth.userId));
                dispatch(setEditMode(false));
            } else {
                const errorMessage = response?.data.messages.length !== 0 ? response?.data.messages[0] : 'Some error!'
                dispatch(stopSubmit('profileDescription', {_error: errorMessage}));
            }
        } catch (e) {
            console.log(e);
        }
    };
export const setEditMode = (isEdit: boolean): AppThunkType =>
    async (dispatch) => {
        try {
            dispatch(setEdit(isEdit));
        } catch (e) {
            console.log(e);
        }
    };

export const requestUsers = (page: number, pageSize: number): AppThunkType =>
    async (dispatch) => {
        try {
            dispatch(setFetching(true));
            dispatch(changeCurrentPage(page, pageSize)); // TODO: delete page size
            const data = await usersAPI.getUsers(page, pageSize);
            dispatch(setFetching(false));
            if (data) {
                dispatch(showUsers(data.items));
                dispatch(setUsersTotalCount(data.totalCount));
            }
        } catch (e) {
            console.log(e);
        }
    };
export const followUser = (userId: number): AppThunkType =>
    async (dispatch) => {
        const apiMethod = followAPI.followUser.bind(usersAPI);
        followUnfollowFlow(dispatch, userId, apiMethod, follow);
    };
export const unfollowUser = (userId: number): AppThunkType =>
    async (dispatch) => {
        const apiMethod = followAPI.unfollowUser.bind(usersAPI);
        followUnfollowFlow(dispatch, userId, apiMethod, unfollow);
    };
export const setAuthentication = (): AppThunkType<Promise<string | void>> =>
    async (dispatch) => {
        try {
            const data = await authAPI.me();
            if (data && data.resultCode === 0) {
                const {id, login, email} = data.data;
                dispatch(setAuthenticated(id, login, email, true));
            }
        } catch (e) {
            console.log(e);
        }
    };
export const logIn = (formData: FormDataType): AppThunkType =>
    async (dispatch) => {
        try {
            const data = await authAPI.logIn(formData);
            if (data && data.resultCode === 0) {
                dispatch(setAuthentication());
            } else {
                const errorMessage = data && data.messages.length !== 0 ? data.messages[0] : 'Some error!'
                dispatch(stopSubmit('login', {_error: errorMessage}));
            }
        } catch (e) {
            console.log(e);
        }
    };
export const logOut = (): AppThunkType =>
    async (dispatch) => {
        try {
            const response = await authAPI.logOut();
            if (response && response.resultCode === 0) {
                dispatch(setAuthenticated(null, null, null, false));
            }
        } catch (e) {
            console.log(e);
        }
    };
export const initializeApp = (): AppThunkType =>
    async (dispatch) => {
        try {
            await dispatch(setAuthentication());
            dispatch(setInitialized());
        } catch (e) {
            console.log(e);
        }
    };