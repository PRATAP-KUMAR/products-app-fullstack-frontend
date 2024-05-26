import { createContext, useState } from "react";

const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
    const obj = props;
    const { children } = obj;

    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(null);
    const [toDelete, setToDelete] = useState(null);

    return (
        <ProductsContext.Provider value={{
            products, setProducts, loading, setLoading, error, setError, showModal, setShowModal, toDelete, setToDelete
        }}>
            {children}
        </ProductsContext.Provider>
    )
}

export { ProductsContext, ProductsContextProvider }