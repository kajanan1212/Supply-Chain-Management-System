import axios from "axios";


const addProduct = (dataa) => {
    // console.log(dataa)
    return axios.post('http://localhost:3001/admin/addproduct', { dataa });
}

const getNewOrders = () => {
    return axios.get('http://localhost:3001/admin/neworder');
}

const getItemsToBeScheduledDW = (district) => {
    return axios.get('http://localhost:3001/admin/scheduletrainto', { params: district.district });
};

const getScheduledOrders = () => {
    return axios.get('http://localhost:3001/admin/scheduledorder');
}
const adminServices = {
    addProduct,
    getNewOrders,
    getScheduledOrders,
    getItemsToBeScheduledDW,
};

export default adminServices;
