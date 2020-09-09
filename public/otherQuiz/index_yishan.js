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
///////from Yishan
const ans = [];
orders.forEach((item, i) => {
    const index = ans.findIndex(el => el.order_id === item.order_id)
    const isRepeat = index !== -1;
    if (isRepeat) {
        ans[index].products.push(...item.products)
    } else {
        ans.push(item)
    }
})
console.log(ans)
