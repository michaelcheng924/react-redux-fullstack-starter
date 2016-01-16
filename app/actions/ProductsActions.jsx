export function setItems(items) {
    return {
        type: 'SET_ITEMS',
        items
    };
}

export function setCart(cart) {
    return {
        type: 'SET_CART',
        cart
    };
}

export function addToCart(id) {
    return {
        type: 'CART_ADD',
        id
    };
}

export function removeFromCart(id) {
    return {
        type: 'CART_REMOVE',
        id
    };
}
