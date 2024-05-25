import API from "../../../api";

const obj = {
    name: "book",
    sku: "book",
    type: "BOOK",
    weight: 200,
    price: 2000
};

const addProduct = () => {
    const postUrl = `${API}/add-product`
    const add = async () => {
        try {
            await fetch(postUrl, {
                method: 'POST',
                body: JSON.stringify(obj)
            });
        } catch (error) {
            console.log(error);
        }
    }
    add();
}

export default addProduct;