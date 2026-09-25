const api = "https://fakestoreapi.com/products";

export const getProducts = async () => {
  try {
    const response = await fetch(api);

    if (response.ok) {
      const data = await response.json();
      return data;
    }

  } catch (error) {
    console.log(`Se produjo un error: ${error.message}`);
  }
}

export const getProductById = async (id) => {
  try {

    if (!parseInt(id))
      throw new Error("El ID debe ser un número");

    const response = await fetch(api + "/" + id);

    if (response.ok) {
      const data = await response.json();
      return data;
    }

  } catch (error) {
    console.log(`Se produjo un error: ${error.message}`);
  }
}

export const addProduct = async (product) => {
  try {

    const response = await fetch(api, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product)
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }

  } catch (error) {
    console.log(`Se produjo un error: ${error.message}`);
  }
}

export const deleteProduct = async (id) => {
  try {

    if (!parseInt(id))
      throw new Error("El ID debe ser un número");

    const response = await fetch(api + "/" + id, {
      method: "DELETE"
    });

    if (response.ok){
      const data = await response.json();
      return data;
    }
    
  } catch (error) {
    console.log(`Se produjo un error: ${error.message}`);
  }
}