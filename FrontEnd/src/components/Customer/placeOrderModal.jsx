import React from 'react';
import "bootstrap/dist/js/bootstrap.min.js";

class PlaceOrderModal extends React.Component {

    state = { 
        district: "",
        city: "",
        address: "",
        show: false,
        disableCity: true
    }


    handleDistrictChange = (e) => {
        this.setState({ 
            district: e.target.value ,
            disableCity: false

        });

    }
    handleCityChange = (e) => {
        this.setState({ city: e.target.value });
    }
    handleAddressChange = (e) => {
        this.setState({ address: e.target.value });
    }
    
    onFormSubmit = (e) => {
       
        if (!this.state.district) {
            alert("Select District");
            return;
        }
        if (!this.state.city) {
            alert("Select City");
            return;
        }
        if (!this.state.address) {
            alert("Enter Address");
            return;
        }
    }
    render() { 

        return (
            <div>

                <button type="button" class="btn btn-primary m-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Place Order
                </button>

                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Enter Shoping Details</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <form action="">

                        <div className="mb-3">
                            <label htmlFor="" className="form-label">District</label>
                            <select className="form-control" onChange={this.handleDistrictChange}>
                                <option value="" hidden disabled="" selected="" >Choose a District...</option>
                                <option >Colombo</option>
                                <option >Negombo</option>
                                <option >Galle</option>
                                <option >Matara</option>
                                <option >Jaffna</option>
                            </select>
                        </div>
                        


                        <div className="mb-3" >
                            <label htmlFor="" className="form-label">City</label>
                            <select disabled={this.state.disableCity} className="form-control" onChange={this.handleCityChange}>
                                <option value="" hidden disabled="" selected="" >Choose a City...</option>
                                <option >AAAAAA</option>
                                <option >BBBBBBBBB</option>
                                <option >CCCCCC</option>
                                <option >DDDDDDDDD</option>
                                <option >EEEEE</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Address</label>
                            <input type="text" className="form-control" value={this.state.address} onChange={this.handleAddressChange} />
                        </div>
                        
                    </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" onClick={this.onFormSubmit} className="btn btn-primary">Place Order</button>
                    </div>
                    </div>
                </div> 
                </div>

                
            </div>
        );
    }
}
 
export default PlaceOrderModal;