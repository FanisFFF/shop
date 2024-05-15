import { createSlice, configureStore } from "@reduxjs/toolkit";
import { CartItem } from "./cart.types";
import { UserData } from "../utils/firebase.utils";

export type Tstate = {
  isOpen: boolean;
  cartItems: CartItem[];
  currentUser: UserData | null;
};
const initialStateObject: Tstate = {
  isOpen: false,
  cartItems: [],
  currentUser: null,
};

const counterSlice = createSlice({
  name: "cart",
  initialState: initialStateObject,
  reducers: {
    setOpenCart: (state, action) => {
      state.isOpen = action.payload;
    },
    addItemToCart: (state, action) => {
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (existingCartItem) {
        state.cartItems.map((cartItem) =>
          cartItem.id === action.payload.id
            ? (cartItem.quantity += 1)
            : cartItem
        );
      } else state.cartItems.push({ ...action.payload, quantity: 1 });
    },
    removeItemFromCart: (state, action) => {
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (existingCartItem && existingCartItem.quantity === 1)
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
      if (existingCartItem && existingCartItem.quantity > 1)
        existingCartItem.quantity -= 1;
    },
    clearCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  setOpenCart,
  addItemToCart,
  removeItemFromCart,
  clearCartItem,
  setCurrentUser,
  clearCart,
} = counterSlice.actions;

export default configureStore({
  reducer: counterSlice.reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
