import Aside from '@/components/Aside'
import GetRequest from '@/components/GetRequest'
import Layout from '@/components/Layout'

const Solicitud = () => {
  return (
    <Layout>

      <div className='md:flex md:min-h-screen'>
        <Aside />

        <div className='md:w-3/4 md:h-screen overflow-scroll'>
          <GetRequest />
        </div>
      </div>
    </Layout>
  )
}

export default Solicitud