import React, { Component } from 'react';


class OrderedProduct extends Component {


    render() {
        return (
            <div>
                <h1 className='d-flex justify-content-center text-primary mt-2'>Order Details</h1>
                <div className='d-flex justify-content-center'>

                    <div className="border border-4 border-dark p-3" style={{ margin: '25px', width: '50%' }}>
                        <div className="row">
                            <div className="col">
                                <h4 className='text-bold'>Shopping Details</h4>
                                <h6>Customer Name: Sivakajan</h6>
                                <h6>Total Quantity: 3</h6>
                                <h6>Address: No 3, Chunnakam, Jaffna</h6>


                            </div>
                            <div className="col">
                                <h4 className='text-bold'>Product Details</h4>
                                <ol>
                                    <li>Cupboard (1)</li>
                                    <li>Chair (5)</li>
                                    <li>Table (1)</li>
                                </ol>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col d-flex justify-content-end'>
                                <button className='btn btn-primary'>
                                    Transported
                                </button>
                            </div>
                            <div className='col d-flex justify-content-start'>
                                <button className='btn btn-danger'>
                                    Cancel Order
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default OrderedProduct;