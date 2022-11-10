export function shipment(object_order) {
    let valorPedido = object_order.basic;// basic -> atributo da classe
    if (valorPedido < 100) {
        return 20;
    }
    else if (valorPedido > 100 && valorPedido <= 200) {
        return 12;
    }
    else {
        return 0
    }
}