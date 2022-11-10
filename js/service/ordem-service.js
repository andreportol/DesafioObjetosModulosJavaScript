import * as ship from './shipping-service.js'


export function total(object_order){
    let frete = ship.shipment(object_order);
    let desconto = Number(object_order.discount); // atributo de porcentagem
    let valor_desconto = (desconto/100)*object_order.basic
    const total = object_order.basic - valor_desconto + frete;
    return total;
}