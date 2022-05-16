import axios from "axios";


const addProduct = (dataa) => {
    // console.log(dataa)
    return axios.post('http://localhost:3001/admin/addproduct', { dataa });
}

const adminServices = {
    addProduct,
};

export default adminServices;
