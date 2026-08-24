let products = [
    {id: 1, name: 'Rice', price: 2000 },
    {id: 2, name: 'Milk', price: 500 },
]

let nextId = 3;

function getAllProducts() {
    return products;
}

function getProudctById(pid) {
    return products.find((product) => product.id === pid)
}

function createProduct (name, price) {
    const product = {
        id: nextId++,
        name,
        price
    }

    products.push(product);

    return product;
}

function updateProduct(pid, name, price) {
    const product = products.find((product) => product.id === pid);

    if (!product) {
        return null;
    }

    product.name = name;
    product.price = price;

    return product;
}

function deleteProduct (pid) {
    const pIndex = products.findIndex(product => product.id === pid);
    let opFlag = false;

    if (pIndex === -1) {
        return opFlag;
    }

    products.splice(pIndex, 1)
    opFlag = true;

    return opFlag;
}

module.exports = { getAllProducts, getProudctById, updateProduct, deleteProduct }