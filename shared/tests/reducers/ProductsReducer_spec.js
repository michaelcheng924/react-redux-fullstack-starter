import { List, Map } from 'immutable';
import { expect } from 'chai';
import productReducer from '../../reducers/ProductsReducer';

const defaultState = Map({
    products: List(),
    cart: List()
});

describe('ProductsReducer', () => {
    describe('SET_ITEMS', () => {
        it('should set items correctly', () => {
            const action = {
                type: 'SET_ITEMS',
                items: ['product 1', 'product 2']
            };
            expect(productReducer(defaultState, action).get('items')).to.equal(List(['product 1', 'product 2']));
        });
    });
});
