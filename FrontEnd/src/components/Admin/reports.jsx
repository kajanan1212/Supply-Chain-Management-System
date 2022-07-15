import Axios from 'axios';
import React, { Component } from 'react'
import { paginate } from '../common/paginate';
import Pagination from '../common/pagination';
import qsr from '../service/qsr.service';

export default class Reports extends Component {
    state = {
        items: [],
        route: '',
        city: '',
        showRoute: false,
        mainCitiesAndRoutes: [],
        Driver: [],
        Assistent: [],
        Customer: [],
        Trucks: [],
        pageSize: 8,
        currentPage: 1
    }

    async componentDidMount() {
        await qsr.getReport2()
            .then(response => {
                this.setState({ items: response.data[0], Driver: response.data[1], Assistent: response.data[2], Customer: response.data[3], Trucks: response.data[4] })
            })
    }
    handleCITYchange = (e) => {
        const { value } = e.target;
        this.setState({ city: value })
    }
    handleRoutechange = (e) => {
        const { value } = e.target;
        this.setState({ route: value })
    }

    async showRouteReport({ route, city }) {
        console.log(route)
        await Axios.get('http://localhost:3001/admin/qsr/report_route', { params: { route, city } }).then((response) => {
            // // const arranged = groupByAttr(response.data, 'order_id')
            // console.log(response.data)
            this.setState({ mainCitiesAndRoutes: response.data })
        })
        this.setState({ showRoute: true })

    }
    handlePageChange = page => {
        this.setState({ currentPage: page });
    };
    render() {
        const newItems = paginate(this.state.items, this.state.currentPage, this.state.pageSize)

        // console.log(this.state)
        return (
            <div>
                <div className='row' style={{ borderBottom: "solid 2px purple" }}>
                    <div className="col-6 p-5">
                        <h4 className="m-4">Items with most orders report</h4>
                        <table className="table table-light">
                            <thead>
                                <tr>
                                    <th scope="col">Product ID</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Count</th>
                                </tr>
                            </thead>
                            <tbody>
                                {newItems.map(item => (
                                    <tr key={item.product_id}>
                                        <td>{item.product_id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.ordered_count}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <Pagination itemCount={this.state.items.length} pageSize={this.state.pageSize} onPageChange={this.handlePageChange} />
                    </div>
                    <div className="col-6 p-5 mt-3" style={{ borderLeft: "solid 2px purple" }}>
                        <h4 className="m-3">Sales report categorized by main cities and routes</h4>
                        <div className="input-group">
                            <span className="input-group-text">CITY and ROUTE</span>
                            <input type="text" aria-label="First name" className="form-control" name="city" onChange={this.handleCITYchange} />
                            <input type="text" aria-label="Last name" className="form-control" name='route' onChange={this.handleRoutechange} />
                            <input type="button" value="show" onClick={() => this.showRouteReport(this.state)} />
                        </div>
                        {this.state.showRoute && (this.state.mainCitiesAndRoutes.length == 0 ? "No data to Show" : (
                            <table className="table table-light">
                                <thead>
                                    <tr>
                                        <th scope="col">Order ID</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Earning</th>
                                        <th scope="col">Capacity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.mainCitiesAndRoutes.map(item => (
                                        <tr key={item.order_id}>
                                            <td>{item.order_id}</td>
                                            <td>{item.date_time.split('T')[0]}</td>
                                            <td>{item.total_price}</td>
                                            <td>{item.capacity}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>))}
                    </div>
                </div>
                <div className="row p-5" style={{ borderBottom: "solid 2px purple" }}>
                    <div className="col-6" style={{ borderRight: 'solid 2px purple' }}>
                        <h5 className="m-3">Working Hours of Drivers/ Driver Assistants and Used hours of Trucks</h5>
                        <h6 style={{ color: 'red' }}>Driver</h6>
                        <table className="table table-light">
                            <thead>
                                <tr>
                                    <th scope="col">Driver Email</th>
                                    <th scope="col">W_H</th>
                                    <th scope="col">Store</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.Driver.map(item => (
                                    <tr key={item.driver_email}>

                                        <td>{item.driver_email}</td>
                                        <td>{item.driver_worked_hours}</td>
                                        <td>{item.store_name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-6 mt-5">
                        <h6 style={{ color: 'red' }}>Assistant</h6>
                        <table className="table table-light">
                            <thead>
                                <tr>
                                    <th scope="col">Assi. Email</th>
                                    <th scope="col">W_H</th>
                                    <th scope="col">Store</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.Assistent.map(item => (
                                    <tr key={item.assistant_email}>
                                        <td>{item.assistant_email}</td>
                                        <td>{item.assistant_worked_hours}</td>
                                        <td>{item.store_name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row p-5" style={{ borderBottom: "solid 2px purple" }}>
                    <div className="col-6" style={{ borderRight: 'solid 2px purple' }}>
                        <h5 className="m-3">Customer order Report</h5>
                        <table className="table table-light">
                            <thead>
                                <tr>
                                    <th scope="col">Email</th>
                                    <th scope="col">total_order_count</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.Customer.map(item => (
                                    <tr key={item.email}>
                                        <td>{item.email}</td>
                                        <td>{item.total_order_count}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-6">
                        <h5 className="m-3">Working hours of Truck</h5>
                        <table className="table table-light">
                            <thead>
                                <tr>
                                    <th scope="col">Truck Name</th>
                                    <th scope="col">Store Name</th>
                                    <th scope="col">Used Hours</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.Trucks.map(item => (
                                    <tr key={item.truck_number}>
                                        <td style={{ paddingLeft: '10px' }}>{item.truck_number}</td>
                                        <td>{item.store_name}</td>
                                        <td>{item.used_hr}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        )
    }
}
