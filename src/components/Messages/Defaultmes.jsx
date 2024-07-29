import React from 'react'
import Meslayout from '../../Meslayout'
export default function Amercan() {
    return (
        <>
            <Meslayout>
                <div className="messbox">
                    <div className="prof" style={{paddingTop:'320px'}}>
                        <img src="https://img.icons8.com/?size=100&id=RsS3YVRPKeWw&format=png&color=000000" alt="" />
                        <p style={{fontWeight:'normal'}}>Your messages</p>
                        <span>Send private photos and messages to a friend or group.</span>
                        <button style={{backgroundColor:'#3288f2'}}>Send message</button>

                    </div>
                </div>
            </Meslayout>
        </>
    )
}
