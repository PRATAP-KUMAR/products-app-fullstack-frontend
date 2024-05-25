import { useProductsContext } from "./useProductsContext";
import API from "../../api";

const useFetchData = () => {

    const {
        products,
        setProducts,
        loading,
        setLoading,
        error,
        setError
    } = useProductsContext();

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`${API}/get-products`);
            const json = await response.json();
            setProducts(json);
            setLoading(null);
        } catch (error) {
            console.log(error);
            setError(error);
            setLoading(null);
        }
    }
    return { fetchData, loading, products, error }
}

export { useFetchData }
