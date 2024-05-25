const validation = (inputs, products) => {
    const type = inputs.type;
    if (type === undefined)
        return "Please choose Type Switcher and fill the details undefined"

    switch (type) {
        case 'Dvd': {
            if (!inputs.size || !inputs.sku || !inputs.name || !inputs.price)
                return "Please add all fields and then save"
            break
        }
        case 'Furniture': {
            if (!inputs.height || !inputs.width || !inputs.length || !inputs.sku || !inputs.name || !inputs.price)
                return "Please add all fields and then save"
            break
        }
        case 'Book': {
            if (!inputs.weight || !inputs.sku || !inputs.name || !inputs.price)
                return "Please add all fields and then save book"
            break
        }
        default: {
            break
        }
    }

    const exists = products.some(product => product.sku.toLowerCase() === inputs.sku.toLowerCase());
    if (exists) return `This SKU -> "${inputs.sku}" is already in Database, Please enter unique SKU`
}

export default validation;