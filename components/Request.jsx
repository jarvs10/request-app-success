import { UseContext } from "@/context/ContextProvider"
import axios from 'axios';
import Alert from "./Alert";
import Modal from "./Modal";
// import {useRouter} from 'next/navigation';

const Request = () => {

  const { setDatos, datos, error, setError, handleReset, modal, setModal } = UseContext();

  const { fecha, funcionario, solicitud, descripcion } = datos;

  const handleChange = ({ target: { name, value } }) => {
    setDatos({ ...datos, [name]: value });
  }

  const handleSubmit = async e => {
    e.preventDefault();

    if (Object.values(datos).includes('')) {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 3000);

      return;
    }

    try {
      await axios.post("http://localhost:3000/api/request/getdata", datos);
      console.log('enviando datos');
      setModal(true);

      setTimeout(() => {
        setModal(false);
      }, 3000);
      
    } catch (error) {
      console.log(error);
    }

    handleReset();

  }

  return (
    <>
      <form onSubmit={handleSubmit} className="bg-white w-3/4 rounded-md shadow-md mt-7 mx-auto py-4 px-4">
        <h1 className="text-2xl font-bold text-center mb-5">Solicitud</h1>

        {
          modal && <Modal />
        }

        <div className="mb-4">
          <label className="block text-gray-400 font-bold mb-2 text-lg" htmlFor="fecha">Fecha: </label>
          <input onChange={handleChange} className="border border-gray-400 rounded-md px-1 py-2 w-full" value={fecha} name="fecha" type="date" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 font-bold mb-2 text-lg" htmlFor="funcionario">Funcionario: </label>
          <input onChange={handleChange} className="border border-gray-400 rounded-md px-1 py-2 w-full" value={funcionario} name="funcionario" type="text" placeholder="Funcionario" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 font-bold mb-2 text-lg" htmlFor="solicitud">Solicitud: </label>
          <select className="border border-gray-400 rounded-md px-1 py-2 w-full" onChange={handleChange} name="solicitud" id="solicitud" value={solicitud}>
            <option value="">-- Seleccione --</option>
            <option value="asignacion">Asignacion</option>
            <option value="horas compensatorias">Horas Compensatorias</option>
            <option value="incapacidades">Incapacidades</option>
            <option value="cambio">Cambio dia de trabajo</option>
          </select>
          {/* <input  className="border border-gray-400 rounded-md px-1 py-2 w-full"  name="solicitud" type="text" placeholder="Escriba Solicitud aqui..." /> */}
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 font-bold mb-2 text-lg" htmlFor="solicitud">Descripcion: </label>
          <input onChange={handleChange} className="border border-gray-400 rounded-md px-1 py-2 w-full" value={descripcion} type="text" name="descripcion" placeholder="Descripcion" />
        </div>

        <input className="bg-gray-500 hover:bg-gray-700 text-white text-center w-full py-2 rounded-md mt-4 font-bold uppercase cursor-pointer" type="submit" value='Enviar' />

        {
          error && <Alert>Todos los campos son obligatorios</Alert>
        }
      </form>
    </>
  )
}

export default Request