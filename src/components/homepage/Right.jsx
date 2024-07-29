import React from 'react'
import './right.css'
export default function Right() {
    return (
        <div>
            <div className="right-part">
                <div className="prof align_right">
                    <a >
                        <img href="" src="https://img.icons8.com/?size=100&id=kDoeg22e5jUY&format=png&color=000000" alt="" />
                        <span className='right_font'> Your_Profile</span>
                    </a>
                    <button className='but' > Switch</button>  {/*onClick={() => window.location.href = 'https://www.instagram.com/'}*/}
                </div>
                
                <div className="suggest">
                    <p>
                        Suggested for you
                    </p>
                    <button >See All</button>
                </div>



                <div >
                    <div className='align_right'>
                        <a >
                            <img href="" src="https://wallpapercave.com/wp/wp10104082.png"  alt="" />
                            <span className='right_font'> Randolph_ski</span>
                            <p>
                                Followed by dustin_32
                            </p>
                        </a>
                        <button className='but' > Follow</button>
                    </div>
                    <div className='align_right'>
                        <a >
                            <img href="" src= "https://cdn-icons-png.flaticon.com/512/424/424833.png" alt="" />
                            <span className='right_font'> Treats_&_toys</span>
                            <p>
                                Followed by the_rock
                            </p>
                        </a>
                        <button className='but' > Follow</button>
                    </div>
                    <div className='align_right'>
                        <a >
                            <img href="" src="https://annasok.com/wp-content/uploads/2021/03/anna-sok-min.png" alt="" />
                            <span className='right_font'> melisa_idk</span>
                            <p>
                                Suggested for you
                            </p>
                        </a>
                        <button className='but' > Follow</button>
                    </div>
                    <div className='align_right'> 
                        <a >
                            <img href="" src='https://e7.pngegg.com/pngimages/635/419/png-clipart-jason-campbell-toronto-yoga-instructor-moksha-yoga-canada-sports.png' alt="" />
                            <span className='right_font'> buff_guy2554</span>
                            <p>
                                New to Instagram
                            </p>
                        </a>
                        <button className='but' > Follow</button>
                    </div>
                    <div className='align_right'>
                        <a >
                            <img href="" src="https://p7.hiclipart.com/preview/796/805/163/eyebrow-cheek-chin-forehead-jaw-maid-of-honor.jpg" alt="" />
                            <span className='right_font'> fake_justin_b</span>
                            <p>
                                Popular
                            </p>
                        </a>
                        <button className='but' > Follow</button>
                    </div>

                </div>
                <p className='about'>
                    About . Help . Press . API . Jobs . Privacy . Terms . Locations . Language . Meta Verified
                    <p>© 2024 INSTAGRAM FROM META</p>
                </p>
                



            </div>
        </div>
    )
}
