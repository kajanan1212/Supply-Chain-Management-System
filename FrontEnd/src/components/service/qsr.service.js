import axios from "axios";


const getOrderToSetRoute = (storeID) => {
    // console.log(storeID)
    return axios.get('http://localhost:3001/store/setroutes', { params: storeID });
}

const setRoutes = (data) => {
    // console.log(data)
    return axios.post('http://localhost:3001/store/setroutes', data);
}

const storeService = {
    getOrderToSetRoute,
    setRoutes,
};

export default storeService;
