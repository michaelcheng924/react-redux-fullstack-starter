import {
    SET_ITEMS,
    SET_CART,
    ADD_TO_CART,
    REMOVE_FROM_CART,
} from 'actions/ProductsActionTypes';

export function setItems(items) {
    return {
        type: SET_ITEMS,
        items
    };
}

export function setCart(cart) {
    return {
        type: SET_CART,
        cart
    };
}

export function addToCart(id) {
    return {
        type: ADD_TO_CART,
        id
    };
}

export function removeFromCart(id) {
    return {
        type: REMOVE_FROM_CART,
        id
    };
}
