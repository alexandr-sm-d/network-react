import * as axios from 'axios';

const instanceOfAxios = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
})

const apiDAL = {
    userAPI: {
        getUsers(currentPage, pageSize) {
            return instanceOfAxios.get(`users?page=${currentPage}&count=${pageSize}`)
                .then((resp) => resp.data)
        },
    }
}

export default apiDAL;