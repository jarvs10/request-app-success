import Aside from '@/components/Aside'
import FormDetail from '@/components/FormDetail'
import Layout from '@/components/Layout'
import axios from 'axios'
import React from 'react'

const DetailsId = ({request}) => {

  return (
    <Layout>
      <div className='md:flex md:min-h-screen'>
        <Aside />

        <div className='md:w-3/4 md:h-screen overflow-scroll'>
          <h1 className='bg-gray-500 text-2xl py-2 text-center text-white font-bold'>Solicitud {request.funcionario}</h1>

          <FormDetail 
            request={request}
          />
        </div>
      </div>
    </Layout>
  )
}

export default DetailsId


export const getServerSideProps = async ({ query: { id } }) => {

  const {data} = await axios.get(`http://localhost:3000/api/request/${id}`);

  return {
    props: {
      request: data
    }
  }
}