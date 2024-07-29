import React from 'react'
import './Mmind.css'
import { a, Outlet, Link } from "react-router-dom";
import Mleft from './Mleft'

export default function Mmind() {
    return (
        <div>
            <Mleft />

            <div className="main">
                <div className="top">

                    <select name="" id="">
                        <option value="">
                            Your_Profile
                        </option>
                    </select>

                    <img src="https://img.icons8.com/?size=100&id=J7woCsfafQYt&format=png&color=000000" alt="" />
                </div>

                <div className="notes">
                    <a >
                        <div class="cloud mine">
                            <p className="" style={{ color: '#8f8f8f' }}>Note..</p>
                        </div>

                        <img className='' src="https://img.icons8.com/?size=100&id=kDoeg22e5jUY&format=png&color=000000" alt="" />
                        <span style={{ color: '#8f8f8f' }}>your note</span>
                    </a>

                    <a >
                        <div class="cloud">
                            <div>
                                <img src="https://img.icons8.com/?size=100&id=nyZALpLxZQgr&format=png&color=000000" alt="" />
                                <p className="song">GiveThanks</p>
                            </div>
                            <p className="auth">Don moen</p>
                        </div>

                        <img className='' src="https://www.pngkit.com/png/full/301-3015254_gentle-by-nature-livestock.png" alt="" />
                        <span>Goat Gilbert </span>
                    </a>

                    <a >
                        <div class="cloud">
                            <div>
                                <img src="https://img.icons8.com/?size=100&id=nyZALpLxZQgr&format=png&color=000000" alt="" />
                                <p className="song">hello world</p>
                            </div>
                            <p className="auth">Alan Walker</p>
                        </div>

                        <img className='' src="https://i1.wp.com/www.coffeenancy.com/wordpress/wp-content/uploads/2015/03/circlesunset1.png" alt="" />
                        <span>shelby ford</span>
                    </a>

                </div>

                <div className="tag">
                    <p >Messages</p>
                    <p style={{ color: '#767676', cursor: 'pointer' }}>Requests</p>
                </div>

                <div className="user">
                    <Link to='/messages/alber'>
                        <img className='' src="https://promoaffiliates.com/wp-content/uploads/2016/07/profile-circle.png" alt="" />
                        <div className="usrrt">
                            <span className='head'>Alber_33_tom</span> <br />
                            <span className="data">active 12 m ago</span>
                        </div>


                    </Link>

                    <Link to={'/messages/nogame'}>
                        <img className='' src="https://nealguides.com/wp-content/uploads/2020/04/cropped-circle.png" alt="" />
                        <div className="usrrt">
                            <span className='head'>NoGame123</span><br />
                            <span className="data">bye bro • 10 m </span>
                        </div>

                    </Link>



                    <Link to={'/messages/american'}>
                        <img className='' src="https://www.lunapic.com/editor/premade/crop-circle.gif" alt="" />
                        <div className="usrrt">
                            <span className='head'>American_spy</span><br />
                            <span className="data">😂😂😂 • 5 w</span>
                        </div>

                    </Link>
                </div>
            </div>

            <Outlet />
        </div>
    )
}
