import axios from "axios";

const getAllProduct = () => {
    return axios.get('http://localhost:3001/', "adf");
};

const handleBuyNow = (dataa, currentUser, cost, capacity) => {
    return axios.post('http://localhost:3001/', { dataa, currentUser, cost, capacity });
}

const getHistory = (id) => {
    return axios.get('http://localhost:3001/history', { params: id });
};

const cancelOrder = (orderID) => {
    return axios.post('http://localhost:3001/history', { orderID });
}


const customerServices = {
    getAllProduct,
    handleBuyNow,
    getHistory,
    cancelOrder,
};

export default customerServices;
