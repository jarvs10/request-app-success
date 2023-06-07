import { UseContext } from "@/context/ContextProvider"
import { useEffect } from "react";

const Filtros = () => {

  const { filtros, setFiltros, setGastosFiltrados, solicitudes } = UseContext();

  useEffect(() => {
    if (filtros) {
      const filtroActualizado = solicitudes.filter(req => req.solicitud === filtros)

      setGastosFiltrados(filtroActualizado);
    }
  }, [filtros])

  return (
    <div className="mt-4 px-14">
      <form className="text-center shadow-md py-4 px-8 w-1/2">
        <div className="campo">
          <label className="block mb-4 text-xl font-bold" htmlFor="gastos">Filtrar Solicitudes</label>
          <select
            className="w-full text-center py-2 border border-gray-300 rounded-md mb-3 font-semibold"
            value={filtros}
            onChange={e => setFiltros(e.target.value)}
            id="gastos"
          >
            <option value="">-- Seleccione --</option>
            <option value="asignacion">Asignacion</option>
            <option value="horas">Horas Compensatorias</option>
            <option value="incapacidades">Incapacidades</option>
            <option value="cambio">Cambio dia de trabajo</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Filtros