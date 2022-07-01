import React, { Component } from 'react';
import Item from './item';
import CartItem from './cartItem';
import Pagination from '../common/pagination';
import { paginate } from '../common/paginate';
import customerServices from '../service/customer.service'
import authService from '../service/auth.service';



class FrontPage extends Component {
    state = {
        items: [],
        carts: [],
        pageSize: 9,
        currentPage: 1,
        places: { 'colombo': [], 'jaffna': [], 'matara': [], 'galle': [], 'trincomalee': [] },

        district: "",
        city: "",
        address: "",
    }

    async componentDidMount() {
        customerServices.getAllProduct().then((response) => {
            this.setState({ items: response.data[0] })
            for (var i = 0; i < response.data[1].length; i++) {
                let { district, city } = response.data[1][i];
                this.state.places[district].push(city)
            }
            // console.log(this.state.places)
            // for (x in response.data[1]) {
            //     console.log(x);
            // }
            // this.setState({ districts: response.data[1] })
            // Axios.post('http://localhost:3001/api/insert',);

        });
    }
    handleDistrictChange = (e) => {
        this.setState({ district: e.target.value });

        // customerServices.getCities(this.state.district).then((res) => {
        // this.setState({cities:res.data});
        //     console.log(res)
        // })
    }
    handleCityChange = (e) => {
        this.setState({ city: e.target.value });
    }
    handleAddressChange = (e) => {
        this.setState({ address: e.target.value });
    }
    handleBuyNow = (dataa, currentUser, cost, capacity) => {
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
        customerServices.handleBuyNow(dataa, currentUser, cost, capacity)
            .catch(err => alert('Something went wrong'))
            .then(window.location.reload())
    }


    render() {
        if (!authService.getCurrentUser()) { window.location = '/login'; }
        const { length: count } = this.state.items;
        const items = paginate(this.state.items, this.state.currentPage, this.state.pageSize)
        return (

            <div style={{ marginBottom: "70px" }}>

                <div >
                    <div className='row d-flex justify-content-center' style={{ margin: '30px' }}>
                        {items.map(item => (
                            <Item key={item.product_id} item={item} handlePutToCart={() => this.putToCart(item)} />
                        ))}
                    </div>
                    <div className="d-flex justify-content-end me-4">
                        <Pagination itemCount={count} pageSize={this.state.pageSize} currentPage={this.state.currentPage} onPageChange={this.handlePageChange} />
                    </div>
                    <div style={{ width: '100%', minHeight: '50px', backgroundColor: 'purple', paddingLeft: '20px' }}>
                        <p className='m-3 text-info h2'>Cart <i className="fa fa-shopping-cart"></i> <span className='fw-normal text-light h5 '>Happy Shopping! Happy Customer!!</span></p>
                        <p className='h4' style={{ marginTop: '-20px', marginLeft: '30px' }}>Total Items <span className='badge bg-warning rounded-pill ms-3 mb-2 mt-2'>{this.findCartItemsValid()}</span></p>
                    </div>
                </div>
                {this.state.carts.map(cart => (
                    <CartItem key={cart.product_id} cart={cart} handleRemoveFromCart={() => this.removeFromCart(cart)} onIncrement={() => this.handleIncrement(cart)} onDecrement={() => this.handleDecrement(cart)} />
                ))}
                <div className="row me-4" >
                    <div className="col-8"></div>
                    <div className="col-2 h3">Total Price: Rs.{this.calculateAmount()}.00</div>
                    <div className="col-2"><button className="btn btn-primary mb-4" disabled={this.findCartItemsValid() === 0 ? 'ture' : ''} data-bs-toggle="modal" data-bs-target="#addressGetter"><b>Buy Now</b></button></div>
                </div>
                <div className="modal fade" id="addressGetter" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Enter Shoping Details</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form action="">

                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">District</label>
                                        <select className="form-control" onChange={this.handleDistrictChange}>
                                            <option value="" hidden disabled="" selected="" >Choose a District...</option>
                                            {/* {console.log(Object.keys(this.state.places))} */}
                                            {Object.keys(this.state.places).map(dis => (
                                                <option value={dis} key={dis} style={{ textTransform: "capitalize" }}>{dis}</option>

                                            ))}
                                        </select>
                                    </div>

                                    <div className="mb-3" >
                                        <label htmlFor="" className="form-label">City</label>
                                        <select disabled={this.state.district === "" ? "true" : ""} className="form-control" onChange={this.handleCityChange}>
                                            <option value="" hidden disabled="" selected="" >Choose a City...</option>
                                            {/* {console.log(this.state.places[this.state.district])} */}
                                            {this.state.district && this.state.places[this.state.district].map(city => (
                                                <option value={city} key={city} style={{ textTransform: "capitalize" }}>{city}</option>

                                            ))}
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">Address</label>
                                        <input type="text" className="form-control" disabled={this.state.city === "" ? "true" : ""} onChange={this.handleAddressChange} />
                                    </div>

                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" onClick={() => this.handleBuyNow(this.state, this.props.user, this.calculateAmount(), this.calculateCapasity())} className="btn btn-primary">Place Order</button>
                            </div>
                        </div>
                    </div>
                </div >
            </div >

        );
    }

    putToCart = (item) => {
        const TempCart = this.state.carts;
        if (!TempCart.find(element => {
            return element.product_id === item.product_id;
        })) {
            const newItem = { ...item, count: 1 }
            TempCart.push(newItem);
        }
        this.setState({ carts: TempCart });
    }

    removeFromCart = (item) => {
        const TempCart = this.state.carts.filter(cart => cart.product_id !== item.product_id);
        this.setState({ carts: TempCart })
    }

    findCartItemsValid = () => {
        const cartValid = this.state.carts.filter(cart => cart.count > 0);
        return cartValid.length;
    }

    handleIncrement = (item) => {
        const carts = [...this.state.carts];
        const index = carts.indexOf(item);
        carts[index] = { ...item };
        carts[index].count++;
        this.setState({ carts })
    }
    handleDecrement = (item) => {
        const carts = [...this.state.carts];
        const index = carts.indexOf(item);
        carts[index] = { ...item };
        carts[index].count--;
        this.setState({ carts })
    }

    calculateAmount = () => {
        const carts = [...this.state.carts];
        let sum = carts.reduce(function (prev, current) {
            return prev + +(current.cost * current.count)
        }, 0);
        // this.setState({ cost: sum });
        return sum;
    }
    calculateCapasity = () => {
        const carts = [...this.state.carts];
        let sum = carts.reduce(function (prev, current) {
            return prev + +(current.capacity * current.count)
        }, 0);
        // this.setState({ capacity: sum })
        return sum;
    }
    handlePageChange = page => {
        this.setState({ currentPage: page });
    };
}

export default FrontPage;