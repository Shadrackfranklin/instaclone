import React from 'react'
import Mleft from './components/Messages/Mleft'
import Mmind from'./components/Messages/Mmind'

export default function Meslayout({children}) {
  return (
    <div>
        <Mleft/>
        <Mmind/>
        {children}
    </div>
  )
}
