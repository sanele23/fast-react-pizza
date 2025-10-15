import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  //   cart: [],
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add a new item to the cart
    addItem(state, action) {
      //  payload = newItem
      state.cart.push(action.payload);
    },
    // Delete an item from the cart
    deleteItem(state, action) {
      // payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    // Increase the quantity of an item in the cart
    increaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      // If the item is found, increase its quantity
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    // Decrease the quantity of an item in the cart
    decreaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      // If the item is found, decrease its quantity
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      // If the item is found and its quantity is 0, delete it from the cart
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    // Clear the cart
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

// Selectors
export const getCart = (state) => state.cart.cart;

export const getUsername = (state) => state.user.username;

// export const getDeleteItem = (state) => state.cart.deleteItem;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
