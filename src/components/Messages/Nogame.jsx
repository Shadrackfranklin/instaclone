import React from 'react'
import Meslayout from '../../Meslayout'
import './Chatbox.css'
export default function Nogame() {
    return (
        <>
            <Meslayout>
                <div className="messbox">

                    <div className="topbar">
                        <div className="left">
                            <img className='topimg' src="https://nealguides.com/wp-content/uploads/2020/04/cropped-circle.png" alt="" />
                            <span className="name">No game</span>

                        </div>
                        <div className="right">
                            <img src="https://img.icons8.com/?size=100&id=14181&format=png&color=000000" alt="" />
                            <img src="https://img.icons8.com/?size=100&id=YBbnkrKZzSkQ&format=png&color=000000" alt="" />
                            <img src="https://img.icons8.com/?size=100&id=82742&format=png&color=000000" alt="" />

                        </div>
                    </div>

                    <div className="prof">
                        <img src="https://nealguides.com/wp-content/uploads/2020/04/cropped-circle.png" alt="" />
                        <p>No Game</p>
                        <span>NoGame • Instagram</span>
                        <button>View Profile</button>
                    </div>

                    <div className="chat">
                        <div className="chattime">
                            <p>26 Apr 2024, 23:53</p>
                        </div>
                        <div className="sender">
                            <img src="https://nealguides.com/wp-content/uploads/2020/04/cropped-circle.png" alt="" />
                            <p>hello, how's life?</p>
                        </div>
                        <div className="receiver">
                            <p>not bad, how's your's?</p>
                        </div>
                        <div className="chattime">
                            <p>27 Apr 2024, 23:53</p>
                        </div>
                        <div className="sender">
                            <img src="https://nealguides.com/wp-content/uploads/2020/04/cropped-circle.png" alt="" />
                            <p>fine. i recently came to bangalore to search for a job</p>
                        </div>
                        <div className="receiver">
                            <p>okay okay</p>
                        </div>
                        <div className="receiver">
                            <p>when did you go?</p>
                        </div>
                        <div className="chattime">
                            <p>28 Apr 2024, 13:53</p>
                        </div>
                        <div className="sender">
                            <img src="https://nealguides.com/wp-content/uploads/2020/04/cropped-circle.png" alt="" />
                            <p>i came here last week</p>
                        </div>
                        <div className="receiver">
                            <p>okay, how about stay?</p>
                        </div>
                        <div className="sender">
                            <img src="https://nealguides.com/wp-content/uploads/2020/04/cropped-circle.png" alt="" />
                            <p>i'm staying at my freinds house </p>
                        </div>
                        <div className="sender">
                            <img src="https://nealguides.com/wp-content/uploads/2020/04/cropped-circle.png" alt="" />
                            <p>i am searching for vacant pgs, you know to shift once i get the job</p>
                        </div>
                        <div className="receiver">
                            <p>okay. take care then</p>
                        </div>
                        <div className="receiver">
                            <p>bye✋</p>
                        </div>
                        <div className="sender">
                            <img src="https://nealguides.com/wp-content/uploads/2020/04/cropped-circle.png" alt="" />
                            <p>bye bro✋</p>
                        </div>

                        <div className='typebox' >
                            <div className="typeboxhead">
                                <div className="lefttype">
                                    <img src="https://img.icons8.com/?size=100&id=43911&format=png&color=000000" alt="" />
                                    <input type="text" className="inpbox" placeholder='Message...'/>

                                </div>
                                <div className="righttype">
                                    <img src="https://img.icons8.com/?size=100&id=ZNyAxEX9vDxS&format=png&color=000000" alt="" />
                                    <img src="https://img.icons8.com/?size=100&id=Rp29CWwkmiWw&format=png&color=000000" alt="" />
                                    <img src="https://img.icons8.com/?size=100&id=85038&format=png&color=000000" alt="" />
                                </div>
                            </div>

                        </div>


                    </div>
                </div>




            </Meslayout>
        </>
    )
}
