import { UseContext } from '@/context/ContextProvider';
import { sendForm } from '@/lib/api';
import { useState } from 'react'
import { useRouter } from "next/router";
import Modal from './Modal';
import Swal from 'sweetalert2';

const FormDetail = ({ request }) => {

  const Swal = require('sweetalert2');

  const { modal, setModal } = UseContext();

  const navigate = useRouter();

  const [email, setEmail] = useState('');

  const [respuesta, setRespuesta] = useState('');

  const { fecha, funcionario, solicitud, descripcion } = request;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(email === '' && respuesta === ''){
      Swal.fire(
        '! Email y Respuesta son necesarios',
        '! Verifica que todos los datos sean llenados',
        'question'
      )

      return;
    }

    await sendForm({ email, fecha, funcionario, descripcion, respuesta });

    Swal.fire(
      'Datos enviados!',
      'Revisa tu bandeja de correo para verificar los datos!',
      'success'
    )

    navigate.push('/');
  }

  return (
    <>
      <section className=" py-1 bg-blueGray-50">
        <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  My Request
                </h6>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleSubmit}>
                {
                  modal && <Modal />
                }
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  User Information
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                        Username
                      </label>
                      <input defaultValue={funcionario} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                        Date
                      </label>
                      <input defaultValue={fecha} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                  </div>

                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="email">
                        Email
                      </label>
                      <input onChange={(e) => setEmail(e.target.value)} name='email' value={email} type='email' id='email' className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                  </div>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />

                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Description
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                      Solicitud
                    </label>
                    <input defaultValue={solicitud} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 mb-3" />

                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                        Details
                      </label>
                      <textarea defaultValue={descripcion} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="4"></textarea>
                    </div>

                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                        Respuesta
                      </label>
                      <textarea onChange={(e) => setRespuesta(e.target.value)} value={respuesta} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="4"></textarea>
                    </div>
                  </div>
                </div>
                <div className='flex justify-end mt-4'>
                  <input type="submit" value="Contestar Solicitud" className='bg-gray-400 hover:bg-gray-600 rounded-md py-2 px-3 text-white font-bold cursor-pointer' />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FormDetail

{/* <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo electrónico"
          required
        />
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Asunto"
          required
        />

        <textarea 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        placeholder=""></textarea> */}
