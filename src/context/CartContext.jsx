

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : []
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItem))
    }, [cartItem])



    // console.log("Cart item ==", cartItem)

    const addToCart = (product, quantity = 1) => {
        //console.log("Added:", product);
        const existingProduct = cartItem.find((item) => item.id === product.id)
        //console.log("existing ====",existingProduct)
        if (existingProduct) {
            setCartItem(cartItem.map((item) => item.id === product.id ? { ...item, cartQuantity: item.cartQuantity + quantity } : item))

        } else {
            setCartItem([...cartItem, { ...product, cartQuantity: quantity }]);
        }

    };

    const incrementQuantity = (id) => {
        setCartItem(
            cartItem.map((item) => item.id === id ?
                {
                    ...item,
                    cartQuantity: item.cartQuantity + 1
                } : item
            )
        )
    }

    const decrementQuantity = (id) => {
        setCartItem(
            cartItem.map((item) => item.id === id ?
                {
                    ...item,
                    cartQuantity: Math.max(1, item.cartQuantity - 1)
                } : item
            )
        )
    }

    const removeFromCart = (id) => {
        setCartItem(
            cartItem.filter((item) => item.id !== id)
        )
    }

    // const Price = cartItem.reduce((total, item) =>
    //     total + item.price * item.cartQuantity, 0
    // )

    const Price = useMemo(() => (
        cartItem.reduce((total, item) =>
            total + item.price * item.cartQuantity, 0
        )
    ), [addToCart,incrementQuantity, decrementQuantity, removeFromCart])

    const totalPrice = Price.toFixed(2)

    const value = {
        cartItem,
        totalPrice,
        setCartItem,
        addToCart,
        incrementQuantity,
        decrementQuantity,
        removeFromCart
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => {
    return useContext(CartContext);
};