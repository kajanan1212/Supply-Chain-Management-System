import React, { Component } from 'react';

class AddProduct extends Component {
    state = { 
        name: "",
        price: "",
        quantity: "",
        capacity: "",
        description: "",
       
    }
    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
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
    

    onFormSubmit = (e) => {
        
        if (!this.state.name) {
            alert("Enter Name");
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
                                <form action="">
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">Name</label>
                                        <input type="text" className="form-control" value={this.state.name} onChange={this.handleNameChange} />
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
                                        <label htmlFor="" className="form-label">Capacity</label>
                                        <input type="text" className="form-control" value={this.state.capacity} onChange={this.handleCapacityChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">Description</label>
                                        <textarea type="text" className="form-control " value={this.state.description} onChange={this.handleDescriptionChange} />
                                    </div>

                                    <div>
                                        <label htmlFor="" className="form-label">Product Image</label>
                                        <input type="file" className="form-control" />

                                    </div>

                                    <button type="submit" onClick={this.onFormSubmit} className="btn mt-3 btn-primary">Add Product</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
 
export default AddProduct;