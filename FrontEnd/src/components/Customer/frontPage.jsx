import React, { Component } from 'react';
import Item from './item';
import CartItem from './cartItem';

class FrontPage extends Component {
    state = {
        items: [
            { id: 1, title: 'Men\'s T- Shirt Neck Blue - Color', description: 'Super fit, long lasting, Color in Blue', cost: '1000', availability: true, brand: 'XYZ Company', location: "../../Images/blue-tshirt.jpg" },
            { id: 2, title: 'Men\'s T- Shirt Neck Blue - Color', description: 'Super fit, long lasting, Color in Blue', cost: '2000', availability: true, brand: 'XYZ Company', location: "../../Images/blue-tshirt.jpg" },
            { id: 3, title: 'Men\'s T- Shirt Neck Blue - Color', description: 'Super fit, long lasting, Color in Blue', cost: '2000', availability: true, brand: 'XYZ Company', location: "../../Images/blue-tshirt.jpg" },
            { id: 4, title: 'Men\'s T- Shirt Neck Blue - Color', description: 'Super fit, long lasting, Color in Blue', cost: '2000', availability: true, brand: 'XYZ Company', location: "../../Images/blue-tshirt.jpg" },
            { id: 5, title: 'Men\'s T- Shirt Neck Blue - Color', description: 'Super fit, long lasting, Color in Blue', cost: '2000', availability: true, brand: 'XYZ Company', location: "../../Images/blue-tshirt.jpg" },
            { id: 6, title: 'Men\'s T- Shirt Neck Blue - Color', description: 'Super fit, long lasting, Color in Blue', cost: '2000', availability: true, brand: 'XYZ Company', location: "../../Images/blue-tshirt.jpg" },
            { id: 7, title: 'Men\'s T- Shirt Neck Blue - Color', description: 'Super fit, long lasting, Color in Blue', cost: '2000', availability: true, brand: 'XYZ Company', location: "../../Images/blue-tshirt.jpg" },
            { id: 8, title: 'Men\'s T- Shirt Neck Blue - Color', description: 'Super fit, long lasting, Color in Blue', cost: '3000', availability: true, brand: 'XYZ Company', location: "../../Images/blue-tshirt.jpg" },
            { id: 9, title: 'Men\'s T- Shirt Neck Blue - Color', description: 'Super fit, long lasting, Color in Blue', cost: '4000', availability: true, brand: 'XYZ Company', location: "../../Images/blue-tshirt.jpg" }
        ],
        carts: [
            { id: 9, title: 'Men\'s T- Shirt Neck Blue - Color', cost: '4000', availability: true, location: "../../Images/blue-tshirt.jpg", count: 1 }

        ]
    }
    render() {
        return (
            <React.Fragment>
                <div >
                    <div className='row d-flex justify-content-center' style={{ margin: '30px' }}>
                        {this.state.items.map(item => (
                            <Item key={item.id} item={item} handlePutToCart={() => this.putToCart(item)} />
                        ))}
                    </div>
                    <div style={{ width: '100%', minHeight: '50px', backgroundColor: 'purple', paddingLeft: '20px' }}>
                        <p className='m-3 text-info h2'>Cart <i className="fa fa-shopping-cart"></i> <span className='fw-normal text-light h5 '>Happy Shopping! Happy Customer!!</span></p>
                        <p className='h4' style={{ marginTop: '-20px', marginLeft: '30px' }}>Total Items <span className='badge bg-warning rounded-pill ms-3 mb-2 mt-2'>{this.findCartItemsValid()}</span></p>
                    </div>
                </div>
                {this.state.carts.map(cart => (
                    <CartItem key={cart.id} cart={cart} handleRemoveFromCart={() => this.removeFromCart(cart)} onIncrement={() => this.handleIncrement(cart)} onDecrement={() => this.handleDecrement(cart)} />
                ))}
            </React.Fragment>

        );
    }

    putToCart = (item) => {
        const TempCart = this.state.carts;
        if (!TempCart.find(element => {
            return element.id === item.id;
        })) {
            const newItem = { ...item, count: 1 }
            TempCart.push(newItem);
            console.log(newItem);
        }
        this.setState({ carts: TempCart });
    }

    removeFromCart = (item) => {
        const TempCart = this.state.carts.filter(cart => cart.id !== item.id);
        this.setState({ carts: TempCart })
    }

    findCartItemsValid = () => {
        const cartValid = this.state.carts.filter(cart => cart.count >= 0);
        console.log(cartValid);
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
}

export default FrontPage;