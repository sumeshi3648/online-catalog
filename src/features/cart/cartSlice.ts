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
        addToCart(state, action: PayloadAction<CartItem>) { //payload defines data about the product
            const existingItem = state.items.find((item) => item.id === action.payload.id); //search for item where item.id is equal tro id of an incoming product
            if (existingItem) {
                const max = existingItem.maxQty ?? 1;
                const totalQuantity = existingItem.quantity + action.payload.quantity;

                if (totalQuantity > max) {
                    existingItem.quantity = max;
                } else {
                    existingItem.quantity = totalQuantity;
                }
            } else {
                const max = action.payload.maxQty ?? 1;
                const quantity = Math.min(action.payload.quantity, max);
                state.items.push({ ...action.payload, quantity });
            }
        },

        removeFromCart(state, action: PayloadAction<number>) {//only id in payload
            state.items = state.items.filter((item) => item.id !== action.payload);
        },

        updateQuantity(state, action: PayloadAction<{id: number; quantity: number}>) {
            const existingItem = state.items.find((item) => item.id === action.payload.id); //search for item where item.id is equal tro id of an incoming product
            if (existingItem) {
                const max = existingItem.maxQty ?? 1;
                existingItem.quantity = Math.min(action.payload.quantity, max);
            }
        },
        clearCart(state) {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;