import React, { Component } from 'react';


class ScheduleTrain extends Component {


    render() {
        return (
            <div className='my-4 container'>
                <h3>Train Trips</h3>
                <div className="row  text-center">
                    <div className="col mx-5 my-4 rounded-3  border border-3 border-dark">
                        <h5 className='pt-4 pb-3'>Trip to Colombo</h5>

                        <button className='btn btn-primary mb-4 mt-2 rounded-pill px-5'>
                            Schedule Now
                        </button>
                    </div>
                    <div className="col mx-5 my-4 rounded-3  border border-3 border-dark">
                        <h5 className='pt-4 pb-3'>Trip to Colombo</h5>

                        <h6 className='text-success mb-2 mt-4'>Already Scheduled</h6>
                    </div>
                    <div className="col mx-5 my-4 rounded-3  border border-3 border-dark">
                        <h5 className='pt-4 pb-3'>Trip to Colombo</h5>

                        <button className='btn btn-primary mb-4 mt-2 rounded-pill px-5'>
                            Schedule Now
                        </button>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col mx-5 my-4 rounded-3  border border-3 border-dark">
                        <h5 className='pt-4 pb-3'>Trip to Colombo</h5>

                        <button className='btn btn-primary mb-4 mt-2 rounded-pill px-5'>
                            Schedule Now
                        </button>
                    </div>
                    <div className="col mx-5 my-4 rounded-3  border border-3 border-dark">
                        <h5 className='pt-4 pb-3'>Trip to Colombo</h5>

                        <button className='btn btn-primary mb-4 mt-2 rounded-pill px-5'>
                            Schedule Now
                        </button>
                    </div>
                    <div className="col mx-5 my-4 rounded-3  border border-3 border-dark">
                        <h5 className='pt-4 pb-3'>Trip to Colombo</h5>

                        <h6 className='text-success mb-2 mt-4'>Already Scheduled</h6>
                    </div>
                </div>
            </div >
        );
    }
}

export default ScheduleTrain;