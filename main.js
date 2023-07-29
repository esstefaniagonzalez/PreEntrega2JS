

const descuento = 1.15

const Producto = function (nombre, precio, stock){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
}

let producto1 = new Producto ("collar Paris",3500,2)
let producto2 = new Producto ("aros roma",2000,4)
let producto3 = new Producto ("pulsera londres",3000,1)
let producto4 = new Producto ("collar tokio",4500,3)
let producto5 = new Producto ("aros alaska",3200,2)
let producto6 = new Producto ("pulsera argentina",4000,1)
let producto7 = new Producto ("collar españa",2900,5)
let producto8 = new Producto ("aros portugal",3200,4)
let producto9 = new Producto ("pañuelo portugal",1800,10)

let lista = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9]

function elegirProducto(){
    let busquedaProducto = prompt ("¿Qué estas buscando?").trim().toUpperCase()

    let resultado = lista.filter((producto) => producto.nombre.toUpperCase().includes(busquedaProducto))

    if (resultado.length > 0){
        console.table (resultado)
    } else{
        alert ("No tenemos disponible el producto: " + busquedaProducto)
    }
}


elegirProducto()


