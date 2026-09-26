const api = "https://fakestoreapi.com/";

export const getProducts = async (url) => {
  try {
    const response = await fetch(api + url);

    if (response.ok) {
      const data = await response.json();
      return data;
    }

  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}

export const addProduct = async (url, product) => {
  try {
    const response = await fetch(api + url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product)
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }

  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}

export const deleteProduct = async (url) => {
  try {
    const response = await fetch(api + url, {
      method: "DELETE"
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
    
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}

// Validaciones para que el index quede más limpio y no repetir tanto código

export const validId = (arg) => {
  return arg && /\/\d/.test(arg);
}

export const urlProd = (arg) => {
  return arg && arg === "products";
}

export const urlProdId = (arg) => {
  return arg && arg.startsWith("products/");
}
