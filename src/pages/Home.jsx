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
                products &&
                <div className="bg-toolite">
                    <div className="relative max-width min-height p-5 bg-lite justify-center">
                        <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 items-center justify-content">
                            {
                                products.map((product, index) => (
                                    <div
                                        key={product.id}
                                        className="relative bg-toolite p-5"
                                    >
                                        <input type="checkbox" id={product.id}
                                            className="absolute top-2 right-2"
                                        />
                                        <p>{product.sku}</p>
                                        <p> {product.name}</p>
                                        <p> {product.price}</p>
                                        <p> {product.type}</p>
                                        <p className="absolute right-1 bottom-1">
                                            {index + 1}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
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
                    </div>
                </div >
            }
        </>
    )
}

export default Home