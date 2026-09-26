import { getProducts, addProduct, deleteProduct, validId, urlProd, urlProdId } from "./funciones.js";

console.log("==== Inicio del programa ====\n");

const args = process.argv.slice(2);
const metodo = args[0];
const comando = args[1];
const error = "Comando incorrecto o incompleto.";

switch (metodo) {
  case "GET":
    if (urlProd(comando) && args.length == 2) {

      const products = await getProducts(comando)
      if (products) console.log("Lista de productos:\n", products);

    } else if (urlProdId(comando) && validId(comando)) {

      const product = await getProducts(comando);
      if (product) console.log("Producto encontrado:\n", product);

    } else
      console.log(error);
    break;

  case "POST":
    if (urlProd(comando) && args.length == 5) {

      const product = { title: args[2], price: args[3], category: args[4] };
      const productAdd = await addProduct(comando, product);
      if (productAdd) console.log("Producto agregado:\n", productAdd);

    } else
      console.log(error);   
    break;

  case "DELETE":
    if (urlProdId(comando) && validId(comando)) {

      const product = await deleteProduct(comando);
      if (product) console.log("Producto eliminado:\n", product);

    } else
      console.log(error);
    break;

  default:
    console.log("Comando inválido. Usar GET, POST o DELETE.");
}
