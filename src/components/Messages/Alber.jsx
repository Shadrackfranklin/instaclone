import React from 'react'
import Meslayout from '../../Meslayout'
import './Chatbox.css'

// function heart() {
//     let likediv=document.createElement("div");
//     likediv.className=".messbox .receiver";
//     likediv.textContent="💖";
//     document.body.appendChild(likediv);
// }

export default function Alber() {
    return (
        <>
            <Meslayout>
                <div className="messbox">

                    <div className="topbar">
                        <div className="left">
                            <img className='topimg' src="https://promoaffiliates.com/wp-content/uploads/2016/07/profile-circle.png" alt="" />
                            <span className="name">Albert James</span>

                        </div>
                        <div className="right">
                            <img src="https://img.icons8.com/?size=100&id=14181&format=png&color=000000" alt="" />
                            <img src="https://img.icons8.com/?size=100&id=YBbnkrKZzSkQ&format=png&color=000000" alt="" />
                            <img src="https://img.icons8.com/?size=100&id=82742&format=png&color=000000" alt="" />

                        </div>
                    </div>

                    <div className="prof">
                        <img src="https://promoaffiliates.com/wp-content/uploads/2016/07/profile-circle.png" alt="" />
                        <p>Albert James</p>
                        <span>Alber_33_tom • Instagram</span>
                        <button>View Profile</button>
                    </div>

                    <div className="chat">
                        <div className="chattime">
                            <p>21 May 2024, 23:53</p>
                        </div>
                        <div className="receiver">
                            <p>Hi brother, how are you?</p>
                        </div>
                        <div className="chattime">
                            <p>22 May 2024, 12:03</p>
                        </div>
                        <div className="sender">
                            <img src="https://promoaffiliates.com/wp-content/uploads/2016/07/profile-circle.png" alt="" />
                            <p>im good. How are you and your family?</p>
                        </div>
                        <div className="sender">
                            <img src="https://promoaffiliates.com/wp-content/uploads/2016/07/profile-circle.png" alt="" />
                            <p>congradulations! on your new job🎉</p>
                        </div>
                        <div className="receiver">
                            <p>they are all good</p>
                        </div>
                        <div className="receiver">
                            <p>Thanks a lot</p>
                        </div>
                        <div className="chattime">
                            <p>23 May 2024, 9:45</p>
                        </div>
                        <div className="receiver">
                            <p>How are peter and john? heard they finished school?</p>
                        </div>
                        <div className="chattime">
                            <p>23 May 2024, 16:43</p>
                        </div>
                        <div className="sender">
                            <img src="https://promoaffiliates.com/wp-content/uploads/2016/07/profile-circle.png" alt="" />
                            <p>yeah, they just finished last week</p>
                        </div>
                        <div className="sender">
                            <img src="https://promoaffiliates.com/wp-content/uploads/2016/07/profile-circle.png" alt="" />
                            <p>now looking for a collge</p>
                        </div>
                        <div className="receiver">
                            <p>nice speaking to you after so long. bye albert</p>
                        </div>
                        <div className="sender">
                            <img src="https://promoaffiliates.com/wp-content/uploads/2016/07/profile-circle.png" alt="" />
                            <p>really is wonderful speaking to too. bye buddy</p>
                        </div>
                        <div className='typebox' >
                            <div className="typeboxhead">
                                <div className="lefttype">
                                    <img src="https://img.icons8.com/?size=100&id=43911&format=png&color=000000" alt="" />
                                    <form className="usertext">
                                        <input type="text" className="inpbox" placeholder='Message...' />
                                    </form>
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
