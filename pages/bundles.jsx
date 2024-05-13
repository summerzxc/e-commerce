import React from 'react'
import Navbar from './components/_molecule/Navbar'
import TitleComponent from './components/_atom/TitleComponent'
import ChildCare from './components/_atom/ChildCare'
import Footer from './components/_molecule/Footer'
import BundleContainer from './components/_molecule/BundleContainer'
import Head from 'next/head'

export default function bundles() {
  return (
    <div className='max-w-[2160px] px-8 mx-auto'>
      <Head>
        <title>Soleil - Bundles</title>
      </Head>
      <Navbar/>
      <TitleComponent title="Bundles"/>
      <BundleContainer/>
      <ChildCare/>
      <Footer/>
    </div>
  )
}
