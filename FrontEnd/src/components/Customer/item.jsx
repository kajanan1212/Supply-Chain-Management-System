import React, { Component } from 'react'


class Item extends Component {
    state = {}
    render() {
        return (
            <div className='rounded border border-secondary border-2 m-4' style={{ minHeight: '200px', width: '500px', background: '#eee', padding: '10px', fontSize: '15px', fontFamily: 'times new roman' }}>
                <div className="row">
                    <div className="col-7">
                        <p className='fw-bolder' style={{ fontSize: '25px', marginBottom: '-2px', textTransform: 'capitalize' }}>{this.props.item.title}</p>
                        <p>{this.props.item.description}</p>

                        <p>LKR: {this.props.item.cost}.00</p>
                        <p>Available Items: {this.props.item.quantity}</p>
                        <button className="btn btn-warning mt-3 ms-5" disabled={this.props.item.quantity === 0 ? 'ture' : ''} onClick={this.props.handlePutToCart}>Add to Cart</button>
                    </div>
                    <div className="col-5">
                        <img src={require('../../Images/' + this.props.item.img)} alt="adsakk" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;