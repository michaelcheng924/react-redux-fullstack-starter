import { Map, List, fromJS } from 'immutable';

const defaultState = Map({
    items: List(),
    cart: List()
});

export default function productReducer(state = defaultState, action) {
    switch(action.type) {
        case 'SET_ITEMS':
            return state.set('items', fromJS(action.items));
        case 'CART_ADD':
            return state.set('cart', state.get('cart').push(action.id)); 
        case 'CART_REMOVE':
            const cart = state.get('cart');
            const index = cart.findIndex(id => id === action.id);
            return state.set('cart', cart.delete(index));
        default:
            return state;
    }
}
