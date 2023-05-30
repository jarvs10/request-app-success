import { UseContext } from "@/context/ContextProvider";
import axios from "axios";
import { useEffect } from "react";
import DataRequest from "./DataRequest";

const FormRequest = () => {

  const { solicitudes, setSolicitudes, filtros, gastosFiltrados } = UseContext();

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/request/getdata');
        setSolicitudes(response.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchRequest()
  }, [])

  const deleteId = async (id) => {
    try {
      await axios.delete('http://localhost:3000/api/request/getdata' + id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <table className='bg-white shadow-xl mt-10 table-auto w-11/12 mx-auto'>
        <thead className='bg-gray-400 text-white'>
          <tr>
            <th className='p-2 text-lg'>Fecha</th>
            <th className='p-2 text-lg'>Funcionario</th>
            <th className='p-2 text-lg'>Solicitud</th>
            <th className='p-2 text-lg'>Descripcion</th>
            <th className='p-2 text-lg'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            filtros ?
              gastosFiltrados.map(req => {
                return (
                  <DataRequest
                    key={req.id}
                    req={req}
                    deleteId={deleteId}
                  />
                )
              }) : (
                solicitudes.map(req => {
                  return (
                    <DataRequest
                      key={req.id}
                      req={req}
                      deleteId={deleteId}
                    />
                  )
                })
              )
          }

        </tbody>
      </table>
    </div>
  )
}

export default FormRequest