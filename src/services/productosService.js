import axios from "axios";

const URL = "https://5f6e1f9360cf97001641bc09.mockapi.io/producto";          

const obtenerProductos = async () => {
  try {
    let { data } = await axios.get(URL);
    return data;
  } catch (error) {
    return error;
  }
};

const obtenerProductoPorId = async (producto_id) => {
  try {
    let { data } = await axios.get(`${URL}/${producto_id}`);    
    return data;
  } catch (error) {
    return error;
  }
};

const crearProducto = async (objProducto) => {
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

const editarProducto = async (producto_id,objNewProducto) => {
  try {
    let headers = {
      "Content-Type": "application/json",
    };
    let { data } = await axios.put(`${URL}/${producto_id}`, objNewProducto, { headers });
    return data;    
  } catch (error) {
    return error;
  }
};

const borrarProducto = async (producto_id) => {
  try {
    let { data } = await axios.delete(`${URL}/${producto_id}`);
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
  obtenerProductos,  
  obtenerProductoPorId,
  crearProducto,
  editarProducto,
  borrarProducto,
  subirImagen
};
