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

const obtenerCategoriaPorId = async (categoria_id) => {
  try {
    let { data } = await axios.get(`${URL}/${categoria_id}`);    
    return data;
  } catch (error) {
    return error;
  }
};

const crearCategoria = async (objProducto) => {
  try {
    let headers = {
      "Content-Type": "application/json",
    };
    let { data } = await axios.post(URL, objProducto, { headers });
    return data;
  } catch (error) {
    return error;
  }
};

const editarCategoria = async (categoria_id,objNewProducto) => {
  try {
    let headers = {
      "Content-Type": "application/json",
    };
    let { data } = await axios.put(`${URL}/${categoria_id}`, objNewProducto, { headers });
    return data;    
  } catch (error) {
    return error;
  }
};

const borrarCategoria = async (categoria_id) => {
  try {
    let { data } = await axios.delete(`${URL}/${categoria_id}`);
    return data;
  } catch (error) {
    return error;
  }
};

const subirImagen = (imagen, refStorage) => {
  return new Promise((resolve, reject) => {
    const tarea = refStorage.put(imagen);

    tarea.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        reject(error);
      },
      //esto ya nos interesa, aca ya subio la imagen
      () => {
        tarea.snapshot.ref.getDownloadURL()
        .then((urlimagen) => {
          console.log(urlimagen)
          resolve(urlimagen)
        })
        .catch((error) => reject(error))
      }
    );
  });
};

export {
  obtenerCategorias,
  obtenerCategoriaPorId,
  crearCategoria,
  editarCategoria,
  borrarCategoria,
  subirImagen
};
