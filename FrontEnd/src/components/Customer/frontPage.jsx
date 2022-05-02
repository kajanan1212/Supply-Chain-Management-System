import React, { Component } from 'react';
import Item from './item';
import CartItem from './cartItem';
import Axios from "axios";
import Pagination from '../common/pagination';
import { paginate } from '../common/paginate';


class FrontPage extends Component {
    state = {
        items: [],
        carts: [],
        pageSize: 9,
        currentPage: 1
    }

    async componentDidMount() {
        Axios.get('http://localhost:3001/').then((response) => {
            this.setState({ items: response.data })
        })
        // Axios.post('http://localhost:3001/api/insert',);
    }

    render() {
        const { length: count } = this.state.items;
        const items = paginate(this.state.items, this.state.currentPage, this.state.pageSize)
        return (
            <React.Fragment>
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
                <div className="row me-4">
                    <div className="col-8"></div>
                    <div className="col-2 h3">Total Price: Rs.{this.calculateAmount()}.00</div>
                    <div className="col-2"><button className="btn btn-primary mb-2" disabled={this.findCartItemsValid() === 0 ? 'ture' : ''}><b>Buy Now</b></button></div>
                </div>
            </React.Fragment>

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
        return sum;
    }
    handlePageChange = page => {
        this.setState({ currentPage: page });
    };

}

export default FrontPage;