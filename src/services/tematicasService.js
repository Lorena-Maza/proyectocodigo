import axios from "axios";
const URL = "https://5f6e1f9360cf97001641bc09.mockapi.io/tematica";


const obtenerTematicas = async () => {
  try {
    let { data } = await axios.get(URL);
    return data;
  } catch (error) {
    return error;
  }
};

const obtenerTematicaPorId = async (tematica_id) => {
  try {
    let { data } = await axios.get(`${URL}/${tematica_id}`);    
    return data;
  } catch (error) {
    return error;
  }
};

const crearTematica = async (objProducto) => {
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

const editarTematica = async (tematica_id,objNewProducto) => {
  try {
    let headers = {
      "Content-Type": "application/json",
    };
    let { data } = await axios.put(`${URL}/${tematica_id}`, objNewProducto, { headers });
    return data;    
  } catch (error) {
    return error;
  }
};

const borrarTematica = async (tematica_id) => {
  try {
    let { data } = await axios.delete(`${URL}/${tematica_id}`);
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
  obtenerTematicas,
  obtenerTematicaPorId,
  crearTematica,
  editarTematica,
  borrarTematica,
  subirImagen
};
