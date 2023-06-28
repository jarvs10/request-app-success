import { UseContext } from "@/context/ContextProvider";
import axios from "axios";
import { useEffect, useState } from "react";
import DataRequest from "./DataRequest";
import { useRouter } from "next/router";
import Swal from 'sweetalert2'

const FormRequest = () => {

  const Swal = require('sweetalert2')

  const navigate = useRouter();

  const { solicitudes, setSolicitudes, filtros, gastosFiltrados } = UseContext();

  const [currentPage, setCurrentPage] = useState(1);
  const dataforPage = 8;
  const lastIndex = currentPage * dataforPage;
  const firstIndex = lastIndex - dataforPage;
  const datas = solicitudes.slice(firstIndex, lastIndex);
  const npage = Math.ceil(solicitudes.length / dataforPage);

  const prevPage = () => {
    if(currentPage !== 1){
      setCurrentPage(currentPage - 1)
    }
  }

  const nextPage = () => {
    if(currentPage !== npage){
      setCurrentPage(currentPage + 1)
    }
  }

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

  const handleDelete = (id) => {

    Swal.fire({
      title: 'Seguro que desea eliminar?',
      text: "No podras revertir esta accion!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          
          await axios.delete(`http://localhost:3000/api/request/${id}`);
          navigate.push('/');
          // window.location.reload();
        } catch (error) {
          console.log(error);
        }
      }
    })
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
                datas.map(req => {
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
      <div className="flex justify-center mt-3 gap-2">
        <button className="bg-lime-600 hover:bg-lime-700 px-3 py-1 text-white font-bold rounded-md" onClick={prevPage} type="button">Prev</button>
        <button className="bg-indigo-600 hover:bg-indigo-700 px-3 py-1 text-white font-bold rounded-md" onClick={nextPage} type="button">Next</button>
      </div>
    </div>
  )
}

export default FormRequest