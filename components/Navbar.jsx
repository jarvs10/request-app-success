import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='flex justify-between flex-row items-center px-3 py-2 border-b-2 border-gray-400'>
        <div className='flex gap-3'>
          <Link href={'/'}>
            <Image className='w-10' src={'/img/task.png'} width={100} height={100} alt='icon' />
          </Link>

          <Image className='w-10' src={'/img/nsball.png'} width={100} height={100} alt='icon' />
        </div>

        <Link href={'/login'}>
          <Image className='w-8' src={'/img/avatar.png'} width={100} height={100} alt='icon' />
        </Link>

      </div>
    </>

  )
}

export default Navbar