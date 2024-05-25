import { Link, useMatch, useNavigate } from "react-router-dom";
import addProduct from "./helpers/addProduct";
import { useProductsContext } from "../hooks/useProductsContext";

function Header() {
    const { setShowModal, setToDelete } = useProductsContext();

    const match = useMatch("/");
    const navigate = useNavigate();

    const onAddProduct = () => {
        let form = document.getElementById("product-form");
        console.log(form);
    }

    const onDelete = () => {
        setToDelete(null);
        let checked = document.querySelectorAll("input[type=checkbox]:checked");
        let collected = Array.from(checked, node => node.id);
        let array = collected.length ? collected : null;
        if (array) {
            setShowModal(true);
            setToDelete(array);
        } else {
            setShowModal(true);
        }
    }

    return (
        <div className='bg-toodark sticky top-0 z-50'>
            <div className='max-width h-16 flex font-custom tod justify-between items-center p-5 text-toolite font-bold'>
                <div className='flex text-lg'>{match ? "Products Lit" : "Add a product"}</div>
                <div className="flex items-center justify-center space-x-5">
                    <div>
                        {
                            match ? <Link className="btn" to={"add-product"}>Add</Link> : <button onClick={onAddProduct} className="btn">Save</button>
                        }
                    </div>
                    <div>
                        {
                            match ? <button onClick={onDelete} className="btn">Mass Delete</button> : <Link className="btn" to={"/"}>Cancel</Link>
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header;