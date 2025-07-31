import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types/product";

type CartItem = Product & {quantity: number}; //type that is send to card is product description + its' quantity

type CartState = {
    items: CartItem[]; 
};

const initialState: CartState = { //cart should b e empty in the beginning
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Product>) { //payload defines data about the product
            const existingItem = state.items.find((item) => item.id === action.payload.id); //search for item where item.id is equal tro id of an incoming product
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1});
            }
        },

        removeFromCart(state, action: PayloadAction<number>) {//only id in payload
            state.items = state.items.filter((item) => item.id !== action.payload);
        },

        updateQuantity(state, action: PayloadAction<{id: number; quantity: number}>) {
            const existingItem = state.items.find((item) => item.id === action.payload.id); //search for item where item.id is equal tro id of an incoming product
            if (existingItem && action.payload.quantity > 0) {
                existingItem.quantity = action.payload.quantity;
            }
        },
        clearCart(state) {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;