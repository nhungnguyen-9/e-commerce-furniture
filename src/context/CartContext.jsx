"use client"

import { useRouter } from "next/navigation"
import { createContext, useState, useEffect } from "react"

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const router = useRouter()

    useEffect(() => {
        setCartToState()
    }, []);

    const setCartToState = () => {
        setCart(
            localStorage.getItem("cart")
                ? JSON.parse(localStorage.getItem("cart"))
                : []
        );
    };

    const addItemToCart = async ({
        _id,
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
            _id,
            product,
            name,
            price,
            discount,
            image,
            materials,
            size,
            quantity,
        }

        const isItemExist = cart?.cartItems?.find(
            (i) => i.product === item.product
        );

        let newCartItems;

        if (isItemExist) {
            newCartItems = cart?.cartItems?.map((i) =>
                i.product === isItemExist.product ? item : i
            );
        } else {
            newCartItems = [...(cart?.cartItems || []), item];
        }

        localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
        setCartToState()
    }

    const deleteItemFromCart = (slug) => {
        const newCartItems = cart?.cartItems?.filter((i) => i.product !== slug);

        localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
        setCartToState();
    }

    const saveOnCheckout = ({ totalAmount }) => {
        const checkoutInfo = {
            totalAmount
        }

        const newCart = { ...cart, checkoutInfo }

        localStorage.setItem('cart', JSON.stringify(newCart))
        setCartToState()
        router.push('/thanh-toan')
    }

    const clearCart = () => {
        localStorage.removeItem("cart")
        setCartToState()
    }

    const clearCheckoutInfo = () => {
        localStorage.removeItem('checkoutInfo')
        setCartToState()
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                addItemToCart,
                deleteItemFromCart,
                saveOnCheckout,
                clearCart,
                clearCheckoutInfo
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartContext