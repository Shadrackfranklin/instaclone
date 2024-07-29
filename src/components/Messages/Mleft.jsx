import React from 'react'
import homeW from '../../images/homeW.png'
import messB from '../../images/messB.png'
import './Mleft.css'

export default function Mleft() {
    return (
        <div>
            <div className='nav'>

                <ul className='mesul1' >
                    <a style={{ marginBottom: '30px', marginTop: '10px'}} >
                        <img src='https://img.icons8.com/?size=100&id=0wr4dYtBFwHA&format=png&color=000000' alt="" />
                    </a>

                    <a href='/' >
                        <img src={homeW} alt="" />
                    </a>

                    <a  >
                        <img src="https://img.icons8.com/?size=100&id=132&format=png&color=000000" alt="" />

                    </a>

                    <a  >
                        <img src="https://img.icons8.com/?size=100&id=9672&format=png&color=000000" alt="" />
                    </a>

                    <a  >
                        <img src="https://img.icons8.com/?size=100&id=J6T4OOFSL7SW&format=png&color=000000" alt="" />
                    </a>

                    <a href='/messages' >
                        <img src={messB} alt="" />
                    </a>

                    <a  >
                        <img src="https://img.icons8.com/?size=100&id=87&format=png&color=000000" alt="" />
                    </a>

                    <a  >
                        <img src="https://img.icons8.com/?size=100&id=GlTdJzFYfVzw&format=png&color=000000" alt="" />
                    </a>

                    <a  >
                        <img src="https://img.icons8.com/?size=100&id=kDoeg22e5jUY&format=png&color=000000" alt="" />
                    </a>
                </ul >
                <ul className='mesul2'>
                    <a  >
                        <img src="https://img.icons8.com/?size=100&id=oykyblY20T6o&format=png&color=000000" alt="" />
                    </a>

                    <a  >
                        <img src="https://img.icons8.com/?size=100&id=36389&format=png&color=000000" alt="" />
                    </a>
                </ul>
            </div>


        </div>
    )
}
