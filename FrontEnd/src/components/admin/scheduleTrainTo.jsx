import React, { Component } from 'react'
import queryString from 'query-string';
import adminServices from '../service/admin.service';

class ScheduleTrainTo extends Component {
    state = {
        Orders: [],
        compartmentcapacity: 0
    }

    async componentDidMount() {
        const district = queryString.parse(location.search);
        await adminServices.getItemsToBeScheduledDW(district).then((response) => {
            // console.log(response)
            // const arranged = groupByAttr(response.data, 'order_id')
            this.setState({ Orders: response.data, compartmentcapacity: response.data[0].compartmentcapacity })



        });
    }
    render() {
        // const trainCapacity = this.state.Orders[0].capacity;
        return (<div className="container mt-4 mb-4" >
            <table className="table table-warning">
                <thead>
                    <tr>
                        <th scope="col">OrderID</th>
                        <th scope="col">Capacity</th>
                        <th scope="col">Add to</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.Orders.map(order => (
                        <tr key={order.order_id} >
                            <td className='col-2'>{order.order_id}</td>
                            <td className='col-2'>{order.capacity}</td>
                            <td className='col-2'><input className="form-check-input" type="checkbox" name="" id="" /></td>
                            {/* <td className='col-1'>{order[0].train_name}</td>
                             <td className='col-1'>{order[0].destination}</td>
                             <td className='col-1'>{order[0].state}</td>
                             <td className='col-1'>{order[0].capacity}</td> */}
                        </tr>
                    ))}

                </tbody>
            </table>
            <h4>Allowed Capacity:  {this.state.compartmentcapacity} m<sup>3</sup> </h4>
            <h4>Total Capacity: {this.handleTotalCapacity()}  m<sup>3</sup></h4>
            <div className=" d-flex justify-content-end" >
                <button className="btn btn-primary">Schedule Now</button>
            </div>
        </div >)
    }

    handleTotalCapacity() {
        return 200;
    }
}



export default ScheduleTrainTo