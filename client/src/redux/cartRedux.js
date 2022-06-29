import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      //nếu tồn tại
      const product = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (product) {
        product.quantity += action.payload.quantity;
        state.total += action.payload.price;
      } else {
        state.quantity += 1;
        state.products.push(action.payload);
        state.total += action.payload.price * action.payload.quantity;
      }
    },
    changeProduct: (state, action) => {
      console.log(action.payload);
      const product = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (product) {
        product.quantity = action.payload.quantity;
      }
      state.total += action.payload.price * action.payload.quantity;
    },

    deleteCart: (state, action) => {
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
      
    },
  },
});

export const { addProduct, changeProduct, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
