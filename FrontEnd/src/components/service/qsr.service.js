import axios from "axios";

// const getTotalProducts = () => {
//     return axios.get('http://localhost:3001/admin/qsr/totalproducts');
// }

const setRoutes = (data) => {
    // console.log(data)
    return axios.post('http://localhost:3001/store/setroutes', data);
}

const getQSR_OVN = (data) => {
    // console.log(data)
    return axios.get('http://localhost:3001/admin/qsr/getQSR_OVN', { params: data });
}

const getAllDetails = (data) => {
    return axios.get('http://localhost:3001/admin/qsr/getAllDetails', { params: data });
}

const getReport2 = (data) => {
    return axios.get('http://localhost:3001/admin/qsr/reports', { params: data });
}

const storeService = {
    getReport2,
    setRoutes,
    getQSR_OVN,
    getAllDetails,
};

export default storeService;


// const totalProducts = axios.get('http://localhost:3001/admin/QSR/totalproducts').then(res => console.log(res))