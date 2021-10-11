import axios from "axios";
import {FormDataType} from "../components/LoginPage";
import {UserProfileType} from "../bll/reducers/profileReducer";
import {
    DefaultResponseType,
    GetUsersResponseType
} from "../bll/reducers/usersReducer";
import {
    AuthMeResponseType,
    LoginResponseType
} from "../bll/reducers/authReducer";


const axiosInst = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': 'c71ad832-d3a7-49e4-81f5-4b21198b07fd'
    }
});

export const usersAPI = {
    getUsers: (currentPage: number = 1, pageSize: number = 10) => {
        return axiosInst
            .get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => response.data);
    },
};

export const followAPI = {
    followUser: (userId: number) => {
        return axiosInst
            .post<DefaultResponseType>(`follow/${userId}`)
            .then(response => response.data);
    },
    unfollowUser: (userId: number) => {
        return axiosInst
            .delete<DefaultResponseType>(`follow/${userId}`)
            .then(response => response.data);
    },
};

export const profileAPI = {
    getUserProfile: (userId: string) => {
        return axiosInst
            .get<UserProfileType>(`profile/${userId}`)
            .then(response => response.data);
    },
    getUserStatus: (userId: string = '19542') => {
        return axiosInst
            .get<string>(`profile/status/${userId}`)
            .then(response => response.data);
    },
    updateMyStatus: (newStatus: string) => {
        return axiosInst
            .put<DefaultResponseType>(`profile/status`, {status: newStatus})
            .then(response => response.data);
    }
};

export const authAPI = {
    me: () => {
        return axiosInst
            .get<AuthMeResponseType>(`auth/me`)
            .then(response => response.data);
    },
    logIn: (formData: FormDataType) => {
        return axiosInst
            .post<LoginResponseType>(`/auth/login`, {
                email: formData.login,
                password: formData.password,
                rememberMe: formData.rememberMe
            })
            .then(response => response.data);
    },
    logOut: () => {
        return axiosInst
            .delete<DefaultResponseType>(`/auth/login`)
            .then(response => response.data);
    }
}