import { getProducts, addProduct, deleteProduct, validId, urlProd } from "./funciones.js";

console.log("==== Inicio del programa ====\n");

const args = process.argv.slice(2);
const [ metodo, url ] = args;
const error = "Comando incorrecto o incompleto.";

switch (metodo) {
  case "GET":
    if (urlProd(url) && args.length == 2) {

      const products = await getProducts(url)
      if (products) console.log("Lista de productos:\n", products);

    } else if (validId(url)) {

      const product = await getProducts(url);
      if (product) console.log("Producto encontrado:\n", product);

    } else
      console.log(error);
    break;

  case "POST":
    if (urlProd(url) && args.length == 5) {

      const product = { title: args[2], price: args[3], category: args[4] };
      const productAdd = await addProduct(url, product);
      if (productAdd) console.log("Producto agregado:\n", productAdd);

    } else
      console.log(error);   
    break;

  case "DELETE":
    if (validId(url)) {

      const product = await deleteProduct(url);
      if (product) console.log("Producto eliminado:\n", product);

    } else
      console.log(error);
    break;

  default:
    console.log("Comando inválido. Usar GET, POST o DELETE.");
}
