import { UseContext } from "@/context/ContextProvider";
import axios from "axios";
import { useEffect } from "react";
import DataRequest from "./DataRequest";
import { useRouter } from "next/router";

const FormRequest = () => {

  const navigate = useRouter();

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

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/request/${id}`);
      navigate.push('/');
      // window.location.reload();
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
        <tbody className="">
          {
            filtros ?
              gastosFiltrados.map(req => {
                return (
                  <DataRequest
                    key={req.id}
                    req={req}
                    handleDelete={handleDelete}
                  />
                )
              }) : (
                solicitudes.map(req => {
                  return (
                    <DataRequest
                      key={req.id}
                      req={req}
                      handleDelete={handleDelete}
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