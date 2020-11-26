import axios from "axios";
const URL = "https://5f6e1f9360cf97001641bc09.mockapi.io/unidad";


const obtenerUnidades = async () => {
  try {
    let { data } = await axios.get(URL);
    return data;
  } catch (error) {
    return error;
  }
};

const obtenerUnidadPorId = async (unidad_id) => {
  try {
    let { data } = await axios.get(`${URL}/${unidad_id}`);    
    return data;
  } catch (error) {
    return error;
  }
};

const crearUnidad = async (objProducto) => {
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

const editarUnidad = async (unidad_id,objNewUnidad) => {
  try {
    let headers = {
      "Content-Type": "application/json",
    };
    let { data } = await axios.put(`${URL}/${unidad_id}`, objNewUnidad, { headers });
    return data;    
  } catch (error) {
    return error;
  }
};

const borrarUnidad = async (unidad_id) => {
  try {
    let { data } = await axios.delete(`${URL}/${unidad_id}`);
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
  obtenerUnidades,
  obtenerUnidadPorId,
  crearUnidad,
  editarUnidad,
  borrarUnidad,
  subirImagen
};
