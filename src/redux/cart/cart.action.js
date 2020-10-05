//import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
        type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
        type: CartActionTypes.ADD_ITEM,
        payload: item
})