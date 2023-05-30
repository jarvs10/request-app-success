import Head from 'next/head'
import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <Navbar />
      
      <main>
        {children}
      </main>
    </>

  )
}

export default Layout