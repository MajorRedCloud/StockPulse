import Header from '@/components/Header'
import React from 'react'

const RootLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className='min-h-screen text-gray-400 remove-scrollbar'>
        <Header />
        <div className='mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8 py-10 remove-scrollbar'>
            {children}
        </div>
    </main>
  )
}

export default RootLayout