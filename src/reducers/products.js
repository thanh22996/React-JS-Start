var initialState = [
    {
        id: 1,
        name: "iphone 11 pro max",
        image: "https://i.pinimg.com/originals/47/38/29/473829b9469da04052338414d8b22222.jpg",
        discript: "Do Apple sản xuất",
        price: 900,
        inventory: 11,
        rating: 5
    },
    {
        id: 2,
        name: "Samsung",
        image: "https://www.svet-telefonije.com/wp-content/uploads/2019/02/OVITEK-ZA-SAMSUNG-GALAXY-S10-1-12.jpg",
        discript: "Do Samsung sản xuất",
        price: 500,
        inventory: 7,
        rating: 4
    },
    {
        id: 3,
        name: "Oppo",
        image: "https://roadtoworld.com/wp-content/uploads/2020/03/oppo-f11-pro-800x800-2.png",
        discript: "Do China sản xuất",
        price: 450,
        inventory: 15,
        rating: 4
    },
];

const products = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state];
    }
}

export default products;