import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "/posts";

const getAllProduct = () => {
    return axios.get('http://localhost:3001/');
};

// const getAllProduct = () => {
//     return axios.get(API_URL + "/private", { headers: authHeader() });
// };

const handleBuyNow = (dataa) => {
    return axios.post('http://localhost:3001/', dataa);
}

const customerServices = {
    getAllProduct,
    handleBuyNow,
};

export default customerServices;
