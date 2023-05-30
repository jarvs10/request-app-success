import Aside from "@/components/Aside";
import Layout from "@/components/Layout";
import Main from "@/components/Main";

export default function Home() {
  return (
    <Layout>
      <div className='md:flex md:min-h-screen'>
        <Aside />

        <div className='md:w-3/4 md:h-screen overflow-scroll'>
          <Main />
        </div>
      </div>
    </Layout>
  )
}
