import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

export const useProductsContext = () => {
    const context = useContext(ProductsContext);

    if (!context) {
        throw Error('Context must be used only inside provider')
    }

    return context;
}