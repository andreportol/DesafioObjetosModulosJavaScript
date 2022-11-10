import Order from "./models/order.js"
import * as ordemService from './service/ordem-service.js'


// data no formato de vetor
const data = document.getElementById("orderInput").innerHTML.split('\n');

const order_1 = new Order(data[0],Number(data[1]), Number(data[2]))



console.log(`Pedido código ${order_1.code}`)
console.log(`Valor total: R$ ${ordemService.total(order_1)}`)
