import axios from "axios";

const getAllProduct = () => {
    return axios.get('http://localhost:3001/');
};

const handleBuyNow = (dataa, cost, capacity) => {
    return axios.post('http://localhost:3001/', { dataa, cost, capacity });
}

const customerServices = {
    getAllProduct,
    handleBuyNow,
};

export default customerServices;
