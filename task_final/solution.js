

function sendRequest(name, phone, address, goods, sum){
    
    let data = {client: " ", order: {address: " ", sum}, goods: []};

    let clientData = `${name} ${phone}`;
    let addressData = `ул. ${address.street}, дом ${address.house}, ${address.entrance} подъезд, ${address.floor} этаж, кв. ${address.flat}`;
    let goodsData = [];
        for (let i = 0; i < goods.length; i++){
            goodsData.push({title: goods[i].title, count: goods[i].count})
    }

    data.client = clientData;
    data.order.address = addressData;
    data.order.sum = sum;
    data.goods = goodsData;

    return JSON.stringify({data});
}
