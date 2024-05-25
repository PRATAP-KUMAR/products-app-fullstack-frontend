import React, { useState } from "react";
import Book from "../components/forms/Book";
import Dvd from "../components/forms/Dvd";
import Furniture from "../components/forms/Furniture";

function AddProduct(props) {
    const [subFormId, setSubFormId] = useState(null);

    const obj = props;
    const { handleChange } = obj;

    const onChange = (e) => {
        setSubFormId(e.target.value);
        handleChange(e);
    }

    return (
        <form
            id="product-form"
            className="max-width min-height bg-lite p-5">
            <fieldset>
                <legend className="text-center font-bold">FORM</legend>
                <div className="w-full flex flex-col space-y-5 bg-toolite p-5">
                    <div className="p-5 bg-lite w-full flex flex-col space-y-5">
                        <input
                            type="text"
                            placeholder="#sku"
                            id="sku"
                            name="sku"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            placeholder="#name"
                            id="name"
                            name="name"
                            onChange={handleChange}
                        />
                        <input
                            type="number"
                            min={1}
                            placeholder="#price"
                            id="price"
                            name="price"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <select
                            name="type"
                            className="w-full"
                            id="productType"
                            defaultValue=""
                            onChange={onChange}
                            required
                        >
                            <optgroup>
                                <option disabled>Type Switcher</option>
                                <option value="Dvd">DVD-Disc</option>
                                <option value="Furniture">Furniture</option>
                                <option value="Book">Book</option>
                            </optgroup>
                        </select>
                    </div>
                    {
                        subFormId &&
                        <div className="w-[90%] mx-auto">
                            {
                                subFormId === 'Dvd' && <Dvd handleChange={handleChange} />
                            }
                            {
                                subFormId === 'Furniture' && <Furniture handleChange={handleChange} />
                            }
                            {
                                subFormId === 'Book' && <Book handleChange={handleChange} />
                            }
                        </div>
                    }
                </div>
            </fieldset>
        </form >
    )
}

export default AddProduct;