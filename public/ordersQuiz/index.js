const orders = [{
    order_id: "s1234",
    products: [{
        name: "dog food",
        quantity: 3,
        price: 300
    }],
    ship_name: "Ada",
    ship_address: "新北市三重區三重路33號3樓",
},
{
    order_id: "s5678",
    products: [{
        name: "cat food",
        quantity: 1,
        price: 900
    }],
    ship_name: "Emma",
    ship_address: "新北市三重區三重路33號3樓",
},
{
    order_id: "s5566",
    products: [{
        name: "sofa",
        quantity: 1,
        price: 16000
    }],
    ship_name: "Luise",
    ship_address: "新北市三重區三重路33號3樓",
},
{
    order_id: "s1234",
    products: [{
        name: "cat scrach wood",
        quantity: 1,
        price: 499
    }],
    ship_name: "Ada",
    ship_address: "新北市三重區三重路33號3樓",
},
{
    order_id: "s1234",
    products: [{
        name: "bird food",
        quantity: 2,
        price: 799
    }],
    ship_name: "Ada",
    ship_address: "新北市三重區三重路33號3樓",
},
{
    order_id: "s1234",
    products: [{
        name: "tiger bowl",
        quantity: 2,
        price: 20
    }],
    ship_name: "Ada",
    ship_address: "新北市三重區三重路33號3樓",
},
]
//題目:找出同樣單號並將商品加入同一單號中
var filter;
var newOrders;
console.log("before", orders)

function findRepeatedAndDelete() {
    orders.forEach((a) => {
        filter = orders.filter((b) => b.order_id === a.order_id)
        newOrders = orders.filter((b) => b.order_id !== a.order_id)
    })
    if (filter.length > 1) {
        for (let i = 0; i < filter.length; i++) {
            if (i + 1 < filter.length) {
                filter[0].products.push(filter[i + 1].products[0])
            } else {
                continue
            }
        }

    }
}
findRepeatedAndDelete()
// console.log("the target order",filter[0])
newOrders.push(filter[0])
console.log("final orders result", newOrders)
