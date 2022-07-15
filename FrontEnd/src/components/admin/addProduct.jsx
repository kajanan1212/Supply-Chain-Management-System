import React, { Component } from 'react';
import adminServices from '../service/admin.service';

class AddProduct extends Component {
    state = {
        title: "",
        price: "",
        quantity: "",
        capacity: "",
        description: "",
        image: "",

    }
    handleTitleChange = (e) => {
        this.setState({ title: e.target.value });
    }
    handlePriceChange = (e) => {
        this.setState({ price: e.target.value });
    }
    handleQuantityChange = (e) => {
        this.setState({ quantity: e.target.value });
    }
    handleCapacityChange = (e) => {
        this.setState({ capacity: e.target.value });
    }
    handleDescriptionChange = (e) => {
        this.setState({ description: e.target.value });
    }
    handleImageChange = (e) => {
        this.setState({ image: e.target.files[0].name });
    }


    onFormSubmit = (dataa) => {

        if (!this.state.title) {
            alert("Enter title");
            return;
        }
        if (!this.state.price) {
            alert("Enter Price");
            return;
        }
        if (!this.state.quantity) {
            alert("Enter Quantity");
            return;
        }
        if (!this.state.capacity) {
            alert("Enter Capacity");
            return;
        }
        if (!this.state.description) {
            alert("Enter Description");
            return;
        }
        // console.log(dataa)
        adminServices.addProduct(dataa)
            // .catch(err => alert('Something went wrong'))
            .catch(err => console.log(err))
            .then(window.location.reload())
    }

    render() {
        return (
            <div>
                <div className='d-flex justify-content-center'>
                    <div className="card" style={{ margin: '100px', width: '50%' }}>
                        <div className="card-body">
                            <div className="card-title">
                                <h1 className='text-primary'>Add Product</h1>
                            </div>
                            <div className="card-body">

                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Title</label>
                                    <input type="text" className="form-control" value={this.state.title} onChange={this.handleTitleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Price</label>
                                    <input type="text" className="form-control" value={this.state.price} onChange={this.handlePriceChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Quantity</label>
                                    <input type="text" className="form-control" value={this.state.quantity} onChange={this.handleQuantityChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Capacity (m<sup>3</sup>)</label>
                                    <input type="text" className="form-control" value={this.state.capacity} onChange={this.handleCapacityChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Description</label>
                                    <textarea type="text" className="form-control " value={this.state.description} onChange={this.handleDescriptionChange} />
                                </div>

                                <div>
                                    <label htmlFor="" className="form-label">Product Image</label>
                                    <input type="file" name='image' className="form-control" onChange={this.handleImageChange} />

                                </div>

                                <button onClick={() => this.onFormSubmit(this.state)} className="btn mt-3 btn-primary">Add Product</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default AddProduct;
