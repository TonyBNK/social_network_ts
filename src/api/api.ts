import axios, {AxiosResponse} from "axios";
import {FormDataType} from "../components/LoginPage";
import {
    AuthMeType, DefaultResponseType,
    GetUsersResponseType,
    LoginType, Nullable,
    UserProfileType
} from "../types/types";


const axiosInst = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': 'c71ad832-d3a7-49e4-81f5-4b21198b07fd'
    }
});

export enum ResultCodes {
    Success,
    Error
}

export const usersAPI = {
    getUsers: async (currentPage: number = 1, pageSize: number = 10) => {
        try {
            const response = await axiosInst.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`);
            return response.data;
        } catch (e) {
            console.log(e);
        }
    },
};

export const followAPI = {
    followUser: async (userId: number) => {
        try {
            const response = await axiosInst.post<DefaultResponseType>(`follow/${userId}`);
            return response.data;
        } catch (e) {
            console.log(e);
        }
    },
    unfollowUser: async (userId: number) => {
        try {
            const response = await axiosInst.delete<DefaultResponseType>(`follow/${userId}`);
            return response.data;
        } catch (e) {
            console.log(e);
        }
    },
};

export const profileAPI = {
    getUserProfile: async (userId: Nullable<number>) => {
        try {
            const response = await axiosInst.get<UserProfileType>(`profile/${userId}`);
            return response.data;
        } catch (e) {
            console.log(e);
        }
    },
    getUserStatus: async (userId: Nullable<number>) => {
        try {
            const response = await axiosInst.get(`profile/status/${userId}`);
            debugger
            return response.data;
        } catch (e) {
            console.log(e);
        }
    },
    updateMyStatus: async (newStatus: Nullable<string>) => {
        try {
            return await axiosInst.put<DefaultResponseType>(`profile/status`, {status: newStatus});
        } catch (e) {
            console.log(e);
        }
    },
    updateMyPhoto: async (file: File) => {
        try {
            const formData = new FormData();
            formData.append('image', file);
            return await axiosInst.put(`profile/photo`, formData, {
                headers: {
                    'Content-type': 'multipart/form-data'
                }
            });
        } catch (e) {
            console.log(e);
        }
    },
    saveProfile: async (profile: UserProfileType) => {
        try {
            return await axiosInst.put(`profile`, profile);
        } catch (e) {
            console.log(e);
        }
    },
};

export const authAPI = {
    me: async () => {
        try {
            const response = await axiosInst.get<DefaultResponseType<AuthMeType>>(`auth/me`);
            return response.data;
        } catch (e) {
            console.log(e);
        }
    },
    logIn: async (formData: FormDataType) => {
        try {
            const response = await axiosInst.post<DefaultResponseType<LoginType>>(`/auth/login`, {
                email: formData.login,
                password: formData.password,
                rememberMe: formData.rememberMe
            });
            return response.data;
        } catch (e) {
            console.log(e);
        }
    },
    logOut: async () => {
        try {
            const response = await axiosInst.delete<DefaultResponseType>(`/auth/login`);
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }
}