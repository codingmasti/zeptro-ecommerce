import { createContext, useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";

const WishlistContext = createContext(null)

const WishlistProvider = ({ children }) => {
    const [wishlistItem, setWishlistItem] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
})

   useEffect(() => {
    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlistItem)
    );
}, [wishlistItem]);

    const AddToWishlist = (product) => {
        const existingItem = wishlistItem.find((item) => item.id === product.id)

        if (!existingItem) {
            setWishlistItem([...wishlistItem, product])
        }
    }

    const RemoveFromWishlist = (id) => {
        const updetedWishlist = wishlistItem.filter((item) => item.id !== id);
        setWishlistItem(updetedWishlist)
    }
    const value = {
        wishlistItem,
        AddToWishlist,
        RemoveFromWishlist
    }
    return (
        <WishlistContext.Provider value={value} >
            {children}
        </WishlistContext.Provider>
    )
}

const useWishlistContext = () => {
    return useContext(WishlistContext)
}

export { WishlistProvider, useWishlistContext }

