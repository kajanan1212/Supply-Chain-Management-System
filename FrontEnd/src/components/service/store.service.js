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
    return axios.get('http://localhost:3001/store/driver', { params: storeID });
}

const changeState = (scheduleId, state, driver_id, assistant_id) => {
    return axios.post('http://localhost:3001/store/driver', { scheduleId, state, driver_id, assistant_id })
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
};

export default storeService;
