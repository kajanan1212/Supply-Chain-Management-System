import React, { Component } from 'react';

class CartItem extends Component {
    state = {}
    render() {
        return (
            <div className="row mt-4 mb-3 align-items-center" style={{ height: '150px', width: '100%', backgroundColor: '#999', fontFamily: 'times new roman' }}>
                <div className="col-2"> <img src={require('../../Images/' + this.props.cart.img)} alt="adsakk" style={{ height: '140px', width: '100%', objectFit: 'contain' }} /></div>
                <div className="col-2 h3 fw-bold" style={{ textTransform: 'capitalize' }}>{this.props.cart.title}</div>
                <div className="col-2 h3">LKR:{this.props.cart.cost}.00</div>
                <div className="col-2 h3">Quantity<span className="badge bg-secondary ms-2">{this.props.cart.count}</span></div>
                <div className="col-4">
                    <button className="btn-sm btn-success btn" onClick={this.props.onIncrement} disabled={this.props.cart.count === this.props.cart.quantity ? 'ture' : ''} ><i className="fa fa-plus" ></i></button>
                    <button className="btn-sm btn-success btn ms-3" onClick={this.props.onDecrement} disabled={this.props.cart.count === 0 ? 'ture' : ''}> <i className="fa fa-minus"></i></button>
                    <button className="btn btn-danger ms-3" onClick={this.props.handleRemoveFromCart}>Remove Item</button></div>
            </div>
        );
    }
}

export default CartItem;