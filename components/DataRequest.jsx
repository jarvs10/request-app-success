import { useRouter } from 'next/navigation'

const DataRequest = ({ req, handleDelete }) => {

  const router = useRouter();

  const { id, fecha, funcionario, solicitud, descripcion } = req;

  return (
    <>
      <tr className='border-b'>
        <td className='p-4 text-center'>
          <p className='text-1xl text-gray-700 font-bold'>{fecha}</p>
        </td>

        <td className='p-4 text-center'>
          <p className='text-1xl text-gray-400 font-semibold'>{funcionario}</p>
        </td>

        <td className='p-4 text-center'>
          <p className='text-1xl text-gray-400 font-semibold'>{solicitud}</p>
        </td>

        <td className='p-4 text-center'>
          <p className='text-1xl text-gray-400 font-semibold'>{descripcion}</p>
        </td>


        <td className='text-center flex gap-2 justify-center flex-row items-center py-6 px-2'>
          {/* <Link href={'/'}>
            <button className='text-green-500 hover:text-green-700 text-1xl font-semibold'>Editar</button>
          </Link> */}
          <button onClick={() => router.push(`/solicitud/${id}`)} className='bg-indigo-500 text-white py-1 px-2 hover:bg-indigo-700 text-1xl font-bold rounded-md'>Ver</button>
          <button onClick={() => handleDelete(id)} className='bg-red-500 text-white py-1 px-2 hover:bg-red-700 text-1xl font-bold rounded-md'>Delete</button>

        </td>

      </tr>
    </>
  )
}

export default DataRequest