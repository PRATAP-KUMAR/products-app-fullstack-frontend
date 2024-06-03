import { useEffect } from "react"
import Loading from "../components/Loading";
import FetchError from "../components/FetchError";
import { useFetchData } from "../hooks/useFetchData";
import Modal from "../components/Modal";
import { useProductsContext } from "../hooks/useProductsContext";
import API from "../../api";

function Home() {

    const { fetchData, loading, products, error, setError } = useFetchData();
    const { showModal, setShowModal } = useProductsContext();
    const { toDelete } = useProductsContext();

    const onDelete = () => {
        const postUrl = `${API}/del-products`
        const deleteProducts = async () => {
            try {
                await fetch(postUrl, {
                    method: 'POST',
                    body: JSON.stringify({ array: toDelete })
                }).then(() => {
                    fetchData();
                    setShowModal(null);
                })
            } catch (error) {
                setError(error);
                setShowModal(null);
            }
        }
        if (toDelete.length > 0) deleteProducts();
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            {loading && <Loading />}
            {error && <FetchError />}
            {
                products && products.length === 0 &&
                <div className="max-width center-div bg-lite font-custom font-bold text-dark">
                    No Products
                </div>
            }
            {
                products && products.length !== 0 &&
                <div className="bg-toolite">
                    <div className="relative max-width min-height p-5 bg-lite justify-center">
                        <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 items-end justify-content">
                            {
                                products.map((product, index) => (
                                    <div
                                        key={product.id}
                                        className="relative flex flex-col space-y-2 bg-toolite min-h-[200px] p-5"
                                    >
                                        <input type="checkbox" id={product.id}
                                            className="absolute top-2 right-2"
                                        />
                                        <p>SKU: {product.sku}</p>
                                        <p>Name: {product.name}</p>
                                        <p>Price: {product.price}</p>
                                        {product.type === 'Dvd' ? <p>Size: {product.size} MB</p>
                                            :
                                            product.type === 'Book' ? <p>Weight: {product.weight} Grams</p>
                                                :
                                                product.type === 'Furniture' ? <p>Dimension: <span className="text-sm">{product.height} h x {product.width} w x {product.length} l in CM&quot;s</span></p>
                                                    :
                                                    null
                                        }
                                        < p className="absolute right-1 bottom-1">
                                            {index + 1}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div >
            }
            {
                <Modal open={showModal} onClose={() => setShowModal(null)}>
                    {
                        !toDelete &&
                        <div className="p-5 bg-white">
                            No product is slected for Deletion
                        </div>
                    }
                    {
                        toDelete &&
                        <div className="flex flex-col space-y-5 p-5 bg-white">
                            <h3>Are you sure?</h3>
                            <button onClick={onDelete} className="btn bg-red-500">Yes Delete</button>
                        </div>
                    }
                </Modal>
            }
        </>
    )
}

export default Home