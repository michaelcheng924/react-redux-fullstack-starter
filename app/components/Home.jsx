import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from 'actions/ProductsActions';

export class Home extends React.Component {
    renderProducts() {
        return _.map(this.props.items, product => {
            const isInCart = _.indexOf(this.props.cart, product.id) !== -1;

            return (
                <div key={product.id} className="products__item">
                    <strong>{product.name}</strong>
                    <div className="products__item-price">${product.price}</div>
                    <button
                        className="products__item-button"
                        onClick={this.onCartChange.bind(this, isInCart, product.id)}
                    >
                        {isInCart ? 'Remove from Cart' : 'Add to Cart'}
                    </button>
                    <div>{product.description}</div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="home__banner">
                    <div className="home__logo-image" />
                    <h1 className="home__banner-heading">Awesome Company</h1>
                    <div className="home__tagline">Awesome tagline</div>
                </div>
                <div className="products">
                    <div className="cart__count">Number of items in cart: <strong>{this.props.cart.length}</strong></div>
                    <h2 className="products__heading">Products</h2>
                    <div className="products__items">
                        {this.renderProducts()}
                    </div>
                </div>
            </div>
        );
    }

    onCartChange(isInCart, id) {
        const dispatch = this.props.dispatch;

        if (isInCart) {
            dispatch(removeFromCart(id));
            return;
        }

        dispatch(addToCart(id));
    }
}

function mapStateToProps(state) {
    return {
        items: state.products.get('items').toJS(),
        cart: state.products.get('cart').toJS()
    };
}

export default connect(mapStateToProps)(Home);
