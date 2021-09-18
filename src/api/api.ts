import axios from "axios";

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
            .get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => response.data);
    },
    followUser: (userId: number) => {
        return axiosInst
            .post(`follow/${userId}`)
            .then(response => response.data);
    },
    unfollowUser: (userId: number) => {
        return axiosInst
            .delete(`follow/${userId}`)
            .then(response => response.data);
    },
};

export const profileAPI = {
    getUsersProfile: (userId: string = '2') => {
        return axiosInst
            .get(`profile/${userId}`)
            .then(response => response.data);
    }
};

export const authAPI = {
    getUsersAuth: () => {
        return axiosInst
            .get(`auth/me`)
            .then(response => response.data);
    }
}