import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: []
    },
    reducers: {

        addToCart: (state, action) => {
            const { id, qty, price } = action.payload;
            const _p = state.products.find((product)=>product.id===id)

            if(_p) {
                _p.qty += qty
            }else{

                state.products.push({id, qty, price})
            } 
            
        },

        removeFromCart: (state, action) => {
            const { id } = action.payload;
            const index = state.products.findIndex((product) => product.id === id);
            if (index !== -1) {
              state.products.splice(index, 1);
            }
        }
    }
})