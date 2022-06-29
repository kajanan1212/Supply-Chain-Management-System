import axios from "axios";


const getOrderToSetRoute = (storeID) => {
    // console.log(storeID)
    return axios.get('http://localhost:3001/store/setroutes', { params: storeID });
}

const setRoutes = (data) => {
    // console.log(data)
    return axios.post('http://localhost:3001/store/setroutes', data);
}

const getOrdersOnTrain = (storeID) => {
    console.log(storeID)
    return axios.get('http://localhost:3001/store/ordersontrain', { params: storeID });
}

const setOrderReceiveFromTrain = (data) => {
    return axios.post('http://localhost:3001/store/ordersontrain', data);
}

const getAllRoutes = (storeID) => {
    // console.log(storeID)
    return axios.get('http://localhost:3001/store/scheduletruck', { params: storeID });
}

const getOrderListForRoute = (RouteID) => {
    return axios.get('http://localhost:3001/store/scheduletruck', { params: RouteID });
}

const setScheduleTruck = (data) => {
    return axios.post('http://localhost:3001/store/scheduletruck', data);
}

const getDriversOnTrip = (storeID) => {
    return axios.get('http://localhost:3001/store/driverondelivery', { params: storeID });
}

const changeState = (scheduleId, state, driver_id, assistant_id) => {
    return axios.post('http://localhost:3001/store/driverondelivery', { scheduleId, state, driver_id, assistant_id })
}

const getDetails = (storeID) => {
    return axios.get('http://localhost:3001/store', { params: storeID })
}
const storeService = {
    getOrderToSetRoute,
    setRoutes,
    getOrdersOnTrain,
    setOrderReceiveFromTrain,
    getAllRoutes,
    getOrderListForRoute,
    setScheduleTruck,
    getDriversOnTrip,
    changeState,
    getDetails,
};

export default storeService;
