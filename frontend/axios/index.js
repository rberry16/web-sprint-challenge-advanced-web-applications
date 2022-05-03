// ✨ implement axiosWithAuth
import axios from "axios";

const axioswithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
            headers: {
                authorization: token
            },
            baseURL: ''
        })
    }

export default axioswithAuth;