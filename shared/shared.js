let products = [
    { id: 1, productName: 'Apple MacBook Pro 11', image: 'https://picsum.photos/200', category: "1", price: 2400, quantity: 50, status: "1" },
    { id: 2, productName: 'Apple MacBook Pro 12', image: 'https://picsum.photos/201', category: "2", price: 2401, quantity: 50, status: "2" },
    { id: 3, productName: 'Apple MacBook Pro 13', image: 'https://picsum.photos/202', category: "3", price: 2402, quantity: 50, status: "1" },
    { id: 4, productName: 'Apple MacBook Pro 14', image: 'https://picsum.photos/203', category: "4", price: 2403, quantity: 50, status: "2" },
    { id: 5, productName: 'Apple MacBook Pro 15', image: 'https://picsum.photos/203', category: "2", price: 2403, quantity: 50, status: "1" },
];

let category = [
    {
        id: 1,
        name: 'PC & Laptop'
    },
    {
        id: 2,
        name: 'Sport & Outdoor'
    },
    {
        id: 3,
        name: 'Electronic'
    },
    {
        id: 4,
        name: 'Photography'
    },
]

let status = [
    { id: 1, name: 'Active'}, 
    { id: 2, name: 'Inactive'}
]

products.forEach((product) => {
    const cate = category.find((cate) => cate.id === Number(product.category));
    if (cate) product.category = cate.name;
    const sta = status.find((status) => status.id === Number(product.status));
    if (sta) product.status = sta.name;
});

function nextId(array) {
    let id = 0;
    array.length > 0 ? id = array[array.length - 1].id + 1 : id = 1
    return  id;
}


module.exports = { products, category, status, nextId };