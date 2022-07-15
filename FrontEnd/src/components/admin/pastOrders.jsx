import Axios from 'axios';
import React, { Component } from 'react';
import { groupByAttr } from '../common/groupByAttribute'

class PastOrders extends Component {
    state = {
        newOrders: []
    }
    async componentDidMount() {
        await Axios.get('http://localhost:3001/admin/pastorders').then((response) => {
            const arranged = groupByAttr(response.data, 'order_id')
            console.log(response.data)
            this.setState({ newOrders: arranged })
        })
    }
    render() {
        if (this.state.newOrders.length === 0) return <h1 className='d-flex justify-content-center text-primary mt-2'>No Scheduled Orders</h1>;
        return (
            <div className="container mt-4 mb-4" >
                <table className="table table-success">
                    <thead>
                        <tr>
                            <th scope="col">OrderID</th>
                            <th scope="col">time</th>
                            <th scope="col">State</th>
                            <th scope="col">Capacity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.newOrders.map(order => (
                            <tr key={order[0].order_id}>
                                <td className='col-2'>{order[0].order_id}</td>
                                <td className='col-2'>{order[0].date_time.split('.')[0].replace('T', ' -- ')}</td>
                                <td className='col-1'>{order[0].state}</td>
                                <td className='col-1'>{order[0].capacity}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div >
        )
    }
}

export default PastOrders;