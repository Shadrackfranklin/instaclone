import React from 'react'
import Homepage from '../components/homepage/Homepage'
import BaseLayout from '../BaseLayout'
import { Route, Routes } from 'react-router-dom'
import Defaultmes from'../components/Messages/Defaultmes'
import Alber from '../components/Messages/Alber';
import Nogame from '../components/Messages/Nogame'
import American from '../components/Messages/American'
import Login from '../components/login/Login'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/messages' element={<Defaultmes/>} />
      <Route path='/messages/alber' element={<Alber />} />
      <Route path='/messages/nogame' element={<Nogame />} />
      <Route path='/messages/american' element={<American />} />


    </Routes>

    // <BaseLayout>
    //   <div>
    //     <Homepage />
    //   </div>
    // </BaseLayout>
  )
}
