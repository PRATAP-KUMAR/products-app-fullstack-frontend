import { useState } from "react";
import Book from "../components/forms/Book";
import Dvd from "../components/forms/Dvd";
import Furniture from "../components/forms/Furniture";
import { useProductsContext } from "../hooks/useProductsContext";

function AddProduct() {
    const { error, setError } = useProductsContext();
    const [subFormId, setSubFormId] = useState(null);

    const onChange = (e) => {
        e.preventDefault();
        if (error) {
            setError(null);
        }
        setSubFormId(e.target.value);
    }

    return (
        <main className="bg-toolite">
            <form
                onSubmit={(e) => e.preventDefault()}
                id="product-form"
                className="max-width min-height bg-lite p-5">
                <fieldset>
                    <legend className="text-center font-bold">Form</legend>
                    <div className="w-full flex flex-col space-y-5 bg-toolite p-5">
                        <div className="p-5 bg-lite w-full flex flex-col space-y-5">
                            <input
                                required
                                type="text"
                                placeholder="#sku"
                                name="sku"
                            />
                            <input
                                required
                                type="text"
                                placeholder="#name"
                                name="name"
                            />
                            <input
                                required
                                type="number"
                                min={1}
                                placeholder="#price"
                                id="price"
                                name="price"
                            />
                            <select
                                required
                                name="type"
                                id="productType"
                                defaultValue={""}
                                onChange={onChange}
                            >
                                <optgroup>
                                    <option disabled value={""}>Type Switcher</option>
                                    <option value="Dvd">DVD-Disc</option>
                                    <option value="Furniture">Furniture</option>
                                    <option value="Book">Book</option>
                                </optgroup>
                            </select>
                        </div>
                        {
                            subFormId &&
                            <>
                                <div className="w-[90%] mx-auto">
                                    <legend className="text-center font-bold">Sub Form</legend>
                                    {
                                        subFormId === 'Dvd' && <Dvd />
                                    }
                                    {
                                        subFormId === 'Furniture' && <Furniture />
                                    }
                                    {
                                        subFormId === 'Book' && <Book />
                                    }
                                </div>
                            </>
                        }
                        {
                            error &&
                            <div className="text-red-500 font-bold">{error}</div>
                        }
                    </div>
                </fieldset>
            </form >
        </main>
    )
}

export default AddProduct;