"use client"

import { useRouter } from "next/navigation";
import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const router = useRouter;

    useEffect(() => {
        setCartToState();
    }, []);

    const setCartToState = () => {
        setCart(
            localStorage.getItem("cart")
                ? JSON.parse(localStorage.getItem("cart"))
                : []
        );
    };

    const addItemToCart = async ({
        product,
        name,
        price,
        discount,
        image,
        materials,
        size,
        quantity = 1,
    }) => {
        const item = {
            product,
            name,
            price,
            discount,
            image,
            materials,
            size,
            quantity,
        }

        let newCartItems;

        const existingItemIndex = cart?.cartItems.findIndex(
            (i) => i.product === item.product
        )

        if (existingItemIndex !== -1) {
            const existingItem = cart?.cartItems[existingItemIndex]
            const updatedItem = { ...existingItem, quantity: existingItem.quantity + quantity }
            newCartItems = [...cart?.cartItems]
            newCartItems[existingItemIndex] = updatedItem
        } else {
            newCartItems = [...(cart?.cartItems || []), item]
        }

        localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }))
        setCartToState()
    };

    const deleteItemFromCart = (slug) => {
        const newCartItems = cart?.cartItems?.filter((i) => i.product !== slug);

        localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
        setCartToState();
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addItemToCart,
                deleteItemFromCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;