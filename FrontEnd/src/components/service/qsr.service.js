import axios from "axios";

const getTotalProducts = () => {
    return axios.get('http://localhost:3001/admin/qsr/totalproducts');
}

const setRoutes = (data) => {
    // console.log(data)
    return axios.post('http://localhost:3001/store/setroutes', data);
}

const storeService = {
    getTotalProducts,
    setRoutes,
};

export default storeService;


// const totalProducts = axios.get('http://localhost:3001/admin/QSR/totalproducts').then(res => console.log(res))