import React, { useState } from "react";

const ProductsContext = React.createContext({
    products: [],
    toggleFav: (id) => {}
});

export const ProductsContextProvider = props => {
    const [productsList, setProductsList] = useState([
        {
            id: 'p1',
            title: 'Red Scarf',
            description: 'A pretty red scarf.',
            isFavorite: false
        },
        {
            id: 'p2',
            title: 'Blue T-Shirt',
            description: 'A pretty blue t-shirt.',
            isFavorite: false
        },
        {
            id: 'p3',
            title: 'Green Trousers',
            description: 'A pair of lightly green trousers.',
            isFavorite: false
        },
        {
            id: 'p4',
            title: 'Orange Hat',
            description: 'Street style! An orange hat.',
            isFavorite: false
        }
    ]);

    const toggleFavorite = (productId) => {
        setProductsList(currentList => {
            const prodIndex = currentList.findIndex(
                p => p.id === productId
            );
            const newFavStatus = !currentList[prodIndex].isFavorite;
            const updatedProducts = [...currentList];
            updatedProducts[prodIndex] = {
                ...currentList[prodIndex],
                isFavorite: newFavStatus
            };

            return updatedProducts;
        });
    };

    const contextValue = {
        products: productsList,
        toggleFav: toggleFavorite
    };

    return (
        <ProductsContext.Provider
            value={contextValue}
        >
            {props.children}
        </ProductsContext.Provider>
    );
};

export default ProductsContext;