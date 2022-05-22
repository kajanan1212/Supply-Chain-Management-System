import axios from "axios";


const registerWorker = (dataa) => {
    return axios.post('http://localhost:3001/manager/registerWorker', { dataa });
}

const managerServices = {
    registerWorker,
};

export default managerServices;
