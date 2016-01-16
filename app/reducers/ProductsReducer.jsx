import { Map, List, fromJS } from 'immutable';
import $ from 'jquery';

const defaultState = Map({
    items: List(),
    cart: List()
});

export default function productReducer(state = defaultState, action) {
    switch(action.type) {
        case 'SET_ITEMS':
            return state.set('items', fromJS(action.items));
        case 'SET_CART':
            return state.set('cart', fromJS(action.cart));
        case 'CART_ADD':
            return addToCart(state, action); 
        case 'CART_REMOVE':
            return removeFromCart(state, action);
        default:
            return state;
    }
}

function addToCart(state, action) {
    const nextCart = state.get('cart').push(action.id);

    $.ajax({
        type: 'POST',
        url: '/products/cart/update',
        data: JSON.stringify({ cart: nextCart }),
        contentType: 'application/json',
        success(response) {
            console.log(response);
        }
    });

    return state.set('cart', nextCart); 
}

function removeFromCart(state, action) {
    const cart = state.get('cart');
    const index = cart.findIndex(id => id === action.id);
    const nextCart = cart.delete(index);

    $.ajax({
        type: 'POST',
        url: '/products/cart/update',
        data: JSON.stringify({ cart: nextCart }),
        contentType: 'application/json',
        success(response) {
            console.log(response);
        }
    });

    return state.set('cart', nextCart);
}
