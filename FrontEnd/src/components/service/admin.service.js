import axios from "axios";

const pdfparse = (dataa) => {
    // console.log(dataa)
    return axios.post('http://localhost:3001/admin', dataa);
}
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

const getPastOrders = () => {
    return axios.get('http://localhost:3001/admin/pastorders');
}

const scheduleOrdersToTrain = (orderID, train_id) => {
    return axios.post('http://localhost:3001/admin/scheduletrainto', { orderID, train_id });
}

const getAllTrain = () => {
    return axios.get('http://localhost:3001/admin/scheduletrain',)
}

const getItemsLoadToTrain = () => {
    return axios.get('http://localhost:3001/admin/loadtotrain')
}

const LoadOrdersToTrain = (data) => {
    return axios.post('http://localhost:3001/admin/loadtotrain', data)
}

const getDetails = () => {
    return axios.get('http://localhost:3001/admin/detail');

}
const adminServices = {
    pdfparse,
    addProduct,
    getNewOrders,
    getScheduledOrders,
    getItemsToBeScheduledDW,
    scheduleOrdersToTrain,
    getPastOrders,
    getAllTrain,
    getItemsLoadToTrain,
    LoadOrdersToTrain,
    getDetails,
};

export default adminServices;
