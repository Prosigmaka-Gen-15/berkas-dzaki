// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import Footer from './component/Footer'
// import Header from './component/Header'
// import Produk from './component/Produk'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beranda from "./Halaman/Beranda";
import Detail from "./Halaman/Detail";


function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
