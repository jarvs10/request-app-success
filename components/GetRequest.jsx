import Filtros from "./Filtros"
import FormRequest from "./FormRequest"

const GetRequest = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold bg-gray-500 py-3 text-center text-white'>Vista de Solicitudes</h1>

      <Filtros />

      <FormRequest />
    </div>
  )
}

export default GetRequest