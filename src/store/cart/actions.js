import { cartSlice } from "./slice";
const { actions: slice } = cartSlice;

export const addToCart = ({id, qty, price}) => (dispatch) => {
    dispatch(slice.addToCart({id, qty, price}));
}

export const removeFromCart = ({id}) => (dispatch) => {
    dispatch(slice.removeFromCart({id}));
}


// export const _handleAddToCart = (productId) => {
//     dispatch(addToCart({ productId, quantity: 1 }));
// };

// export const handleUpdateQuantity = (productId, quantity) => {
//     dispatch(updateQuantity({ productId, quantity }));
// };

// export const handleRemoveFromCart = (productId) => {
//     dispatch(removeFromCart({ productId }));
// };

