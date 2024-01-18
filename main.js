//importamos crypto el cual nos va ayudar para poder generar ids unicos
import crypto from "crypto";

//creamo nuestro productManager
class ProductManager{
    constructor(){
        this.products = [];
    }
    //añadimos un producto a nuestro product manager
    addProduct(product){

        //verificamos si existen todas las propiedades
        function checkExistCamps(product){
        for(let i in product){
            //en caso de que el producto sea un string vacio o que sea null o undefined lanzamos un nuevo error
            if(product[i] == "" || !product[i] ){
                throw new Error(`Please enter a value for the property ${i}`)
            }
        }
        };

        try{
            checkExistCamps(product);
            //en caso de que ya exista un producto con el mismo codigo lanzamos un error
            if(this.products.includes(a=>a.code == product.code)){
                throw new Error("The element has existed");
            }
            this.products.push(product);
            console.log("se ha añadido el producto correctamente");
        }
        catch(e){
            console.log(e);
        }
    }

    //funcion para obtener todos los producto añadidos hasta el momento
    getProducts(){
        return this.products;
    }

    //obtenemos un producto por el id dado, en caso de que no exista retornamos un mensaje de error
    getProductById(code){
        try{
            let productFind = this.products.find(item=>item.code == code);
            if(productFind){
                return productFind
            }
            else{
                throw new Error("Not found")
            }
        }
        catch(e){
            console.log(e);
        }
    }
    
}

//creamos nuestra clase product
class Product {
    constructor(title,desctiption,price,thumbnail,code,stock){
        this.title = title;
        this.desctiption = desctiption;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}

//creamos un nuevo product manager, que en este caso va manejar todos los procesadores amd
const procesadoresAmd = new ProductManager();

//creamos un nuevo producto con un codigo unico
function createProduct(title,desctiption,price,thumbnail,stock){
    //creamos un nuevo codigo
    let code = crypto.randomBytes(10).toString("hex");
    
    //retornamos el nuevo producto con todos los campos requeridos
    return new Product(title,desctiption,price,thumbnail,code,stock);   
}

//creamos dos productos
const producto1 = createProduct("Procesador ryzen 3600","Procesador serie 3000",20,"../main",400);
const producto12 =  createProduct("Procesador ryzen 3700x","Procesador serie 3000",20,"../main",800);

//añadimos los dos productos a nuestro product manager
procesadoresAmd.addProduct(producto1);
procesadoresAmd.addProduct(producto12);

//obtnemos el codigo del producto1
let codigoProducto1 = producto1.code;

//ahora con el id del producto 1 obtenemos el producto en cuestion
let productoFind = procesadoresAmd.getProductById(codigoProducto1);
console.log(productoFind);


