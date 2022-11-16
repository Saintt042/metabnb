import React, { useContext } from 'react'
import Connectwallet from '../Connectwallet/Connectwallet'
import AppContext from '../Context/AppContext'
import Navbarr from '../Navbar2/Navbarr'
import Nftsectn from '../Nftsectn/Nftsectn'

const Placetostay = () => {
    const { showModal } = useContext(AppContext);
  return (
    <>
    {showModal && <Connectwallet /> }
    <Navbarr />
    <Nftsectn />
    </>
  )
}

export default Placetostay