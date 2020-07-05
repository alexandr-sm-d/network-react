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
            debugger
            return instanceOfAxios.get(`profile/` + userID)
        },
        getUserStatus(userID) {
            return instanceOfAxios.get(`profile/status/` + userID)
        },
        updateStatus(status) {
            return instanceOfAxios.put(`profile/status/`, { status })
        },
        setMainPhoto(photo) {
            debugger;
            let formData = new FormData()
            formData.append('images', photo)
            return instanceOfAxios.put(`profile/photo/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then((resp) => {
                    return resp.data
                })
        },
        async saveProfileInfo(formData) {
            const response = await instanceOfAxios.put('profile', formData)
            return response.data
        }
    },

    authAPI: {
        authSuccess() {
            return instanceOfAxios.get(`auth/me`)
        },
        login(payload) {
            return instanceOfAxios.post('auth/login', {
                ...payload,
                rememberMe: payload.rememberMe || false
            })
        },
        logout() {
            return instanceOfAxios.delete('auth/login')
        }
    }
}

export default apiDAL;