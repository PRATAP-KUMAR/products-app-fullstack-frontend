import { Link, useMatch, useNavigate } from "react-router-dom";
import { useProductsContext } from "../hooks/useProductsContext";
import validation from "./helpers/validation.js";
import API from "../../api.js";

function Header() {
    const navigate = useNavigate();
    const { setShowModal, setToDelete, products } = useProductsContext();

    const match = useMatch("/");

    const onAddProduct = () => {
        let form = document.forms["product-form"];
        const formData = new FormData(form);
        const obj = {};
        for (const pair of formData.entries()) {
            obj[pair[0]] = pair[1]
        }
        console.log(obj);
        const error = validation(obj, products);
        if (error) {
            console.log(error)
            return
        } else {
            const fetchData = async () => {
                try {
                    await fetch(`${API}/add-product`, {
                        method: "POST",
                        body: JSON.stringify(obj)
                    }).then(() => {
                        navigate("/")
                    })
                } catch (error) {
                    console.log(error);
                }
            }
            fetchData();
        }
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
                            match ? <Link className="btn" to={"add-product"}>Add</Link> : <button onClick={onAddProduct} type="submit" className="btn">Save</button>
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