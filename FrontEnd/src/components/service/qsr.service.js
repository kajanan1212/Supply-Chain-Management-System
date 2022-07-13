import axios from "axios";

// const getTotalProducts = () => {
//     return axios.get('http://localhost:3001/admin/qsr/totalproducts');
// }

const setRoutes = (data) => {
    // console.log(data)
    return axios.post('http://localhost:3001/store/setroutes', data);
}

// const getQSRperiod = (data) => {
//     return axios.get('http://localhost:3001/admin/qsr/getQSRperiod', { params: data });
// }

const getAllDetails = (data) => {
    return axios.get('http://localhost:3001/admin/qsr/getAllDetails', { params: data });
}

const storeService = {
    // getTotalProducts,
    setRoutes,
    // getQSRperiod,
    getAllDetails,
};

export default storeService;


// const totalProducts = axios.get('http://localhost:3001/admin/QSR/totalproducts').then(res => console.log(res))