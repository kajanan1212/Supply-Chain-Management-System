import axios from "axios";


const addProduct = (dataa) => {
    // console.log(dataa)
    return axios.post('http://localhost:3001/admin/addproduct', { dataa });
}

const getNewOrders = () => {
    return axios.get('http://localhost:3001/admin/neworder');
}


const getScheduledOrders = () => {
    return axios.get('http://localhost:3001/admin/scheduledorder');
}
const adminServices = {
    addProduct,
    getNewOrders,
    getScheduledOrders,
};

export default adminServices;
