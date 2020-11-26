import axios from "axios";

const URL = "https://5f6e1f9360cf97001641bc09.mockapi.io/categoria";     

const obtenerCategorias = async () => {
  try {
    let { data } = await axios.get(URL);
    return data;
  } catch (error) {
    return error;
  }
};

export {
  obtenerCategorias 
};
