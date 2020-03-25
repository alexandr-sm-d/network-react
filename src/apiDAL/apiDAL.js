import * as axios from 'axios';

const instanceOfAxios = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": '43cbfaa5-d177-4259-a1a4-a50a7adac83a',
    }
})

const apiDAL = {
    userAPI: {
        getUsers(currentPage, pageSize) {
            return instanceOfAxios.get(`users?page=${currentPage}&count=${pageSize}`)
                .then((resp) => resp.data)
        },
        followUser(id) {
            return instanceOfAxios.post(`follow/${id}`)
                .then((resp) => resp.data)
        },
        unfollowUser(id) {
            return instanceOfAxios.delete(`follow/${id}`)
                .then((resp) => resp.data)
        },
    },
    profileAPI: {
        getProfile(userID) {
            return instanceOfAxios.get(`profile/` + userID)
        },
        getUserStatus(userID) {
            return instanceOfAxios.get(`profile/status/` + userID)
        },
        updateStatus(status) {
            return instanceOfAxios.put(`profile/status/`, {status})
        }
    },
    authAPI: {
        authSuccess() {
            return instanceOfAxios.get(`auth/me`)
        }
    }
}

export default apiDAL;