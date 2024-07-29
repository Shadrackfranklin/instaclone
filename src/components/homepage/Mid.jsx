import React from 'react'
import './Mid.css'
import bro from '../../images/bro.png'
import animal from '../../images/animal.png'
import koke from '../../images/koke.png'
import like from '../../images/like.png'

let click=false;
function redlike(evt) {
    const qwert = evt.target.id;
    if(click== false)
    {
        document.getElementById(qwert).src=like;
        click=true;
    }
    else
    {
        document.getElementById(qwert).src='https://img.icons8.com/?size=100&id=85038&format=png&color=000000';
        click=false;
    }
}

export default function Mid() {
    return (
        <div>
            <div className="midpart">
                <div className="story">
                    <ul className="storylist">
                        <a >
                            <img className='imgbord' src="https://promoaffiliates.com/wp-content/uploads/2016/07/profile-circle.png" alt="" />
                            <span>Alber_33_tom</span>
                        </a>

                        <a >
                            <img className='imgbord' src="https://www.pngkit.com/png/full/301-3015254_gentle-by-nature-livestock.png" alt="" />
                            <span>Goat_Gilbert0221 </span>
                        </a>

                        <a >
                            <img className='imgbord' src="https://files.artrapid.com/wp-content/uploads/2018/11/18173822/Mahatma-Gandhi-Biography_crop1.png" alt="" />
                            <span>gandhiji2121</span>
                        </a>

                        <a >
                            <img className='imgbord' src="https://i1.wp.com/www.coffeenancy.com/wordpress/wp-content/uploads/2015/03/circlesunset1.png" alt="" />
                            <span>shel_by_ford</span>
                        </a>

                        <a >
                            <img className='imgbord' src="https://th.bing.com/th/id/R.ca409fa7e24d876926f3f1d13b112841?rik=RNYJ49QrcRCFKw&riu=http%3a%2f%2ftricky-photoshop.com%2fwp-content%2fuploads%2f2017%2f08%2ffinal-1.png&ehk=bpt4xZN%2fdXYgXYN5mLcjv%2fvab0dC%2bocjihDLHM4Ew%2f0%3d&risl=&pid=ImgRaw&r=0" alt="" />
                            <span>bobby_george</span>
                        </a>

                        <a >
                            <img className='imgbord' src="https://i0.wp.com/websitecreationworkshop.com/blog/wp-content/uploads/2017/10/little-red-and-mom-circlecrop-800-tny-1.png?w=800&ssl=1" alt="" />
                            <span>cook_with_nobody</span>
                        </a>

                        <a >
                            <img className='imgbord' src="https://nealguides.com/wp-content/uploads/2020/04/cropped-circle.png" alt="" />
                            <span>NoGame123</span>
                        </a>

                        <a >
                            <img className='imgbord' src="https://www.lunapic.com/editor/premade/crop-circle.gif" alt="" />
                            <span>American_spy</span>
                        </a>


                    </ul>
                </div>
                <div className="post1">
                    <div className="postname ">
                        <img className='imgbord' src="https://www.pngkit.com/png/full/301-3015254_gentle-by-nature-livestock.png" alt="" />
                        <span className='spanfont' >Goat_Gilbert0221</span>
                        <p className='midtime'>• 21 m</p>
                        <p className='more'>•••</p>
                    </div>
                    <div className="postimg">
                        <img src={bro} alt="bro" />
                    </div>
                    <div className="postbut">
                        <div className="left">
                            <button><img onClick={redlike} id='l1' className='emptlike' src="https://img.icons8.com/?size=100&id=85038&format=png&color=000000" alt="" />
                            </button>
                            {/* <button><img onClick={() => redlike(this.id)} id='l1' className='emptlike' src="https://img.icons8.com/?size=100&id=85038&format=png&color=000000" alt="" />
                            </button> */}
                            <img className='comment' src="https://img.icons8.com/?size=100&id=93386&format=png&color=000000" alt="" />
                            <img className='send' src="https://img.icons8.com/?size=100&id=lAJQJFzKedhu&format=png&color=000000" alt="" />
                        </div>
                        <div className="right">
                            <img className='unsave' src="https://img.icons8.com/?size=100&id=82461&format=png&color=000000" alt="" />

                        </div>
                    </div>
                    <div className="postcap">
                        <p className="likedby">Liked by <span style={{ fontWeight: 'bold' }}>xwgotwings</span> and <span style={{ fontWeight: 'bold' }}>others </span></p>
                        <p className="name"> <span style={{ fontWeight: 'bold' }}>Goat_Gilbert022 </span> Boy won the lottery👏</p>
                        <p className="view">View all 14 comments</p>
                        <input type='text' className="addcomment" placeholder='Add a comment...'></input>
                    </div>


                </div>
                <div className="post2">
                    <div className="postname ">
                        <img className='imgbord' src="https://i1.wp.com/www.coffeenancy.com/wordpress/wp-content/uploads/2015/03/circlesunset1.png" alt="" />
                        <span className='spanfont' >shel_by_ford</span>
                        <p className='midtime'>• 5 h</p>
                        <p className='more'>•••</p>
                    </div>
                    <div className="postimg">
                        <img src={animal} alt="animal" />
                    </div>
                    <div className="postbut">
                        <div className="left">
                            <button><img onClick={redlike} id='l2' className='emptlike' src="https://img.icons8.com/?size=100&id=85038&format=png&color=000000" alt="" />
                            </button>                            <img className='comment' src="https://img.icons8.com/?size=100&id=93386&format=png&color=000000" alt="" />
                            <img className='send' src="https://img.icons8.com/?size=100&id=lAJQJFzKedhu&format=png&color=000000" alt="" />
                        </div>
                        <div className="right">
                            <img className='unsave' src="https://img.icons8.com/?size=100&id=82461&format=png&color=000000" alt="" />

                        </div>
                    </div>
                    <div className="postcap">
                        <p className="likedby">Liked by <span style={{ fontWeight: 'bold' }}>natwebbcomedy</span> and <span style={{ fontWeight: 'bold' }}>others </span></p>
                        <p className="name"> <span style={{ fontWeight: 'bold' }}>Brian_o_connor </span> Profesional photograph by <span style={{ color: '#23527F' }}>📸@jsb_wildlife_photography</span></p>
                        <p className="view">View all 2,200 comments</p>
                        <input type='text' className="addcomment" placeholder='Add a comment...'></input>
                    </div>
                </div>
                <div className="post3">
                    <div className="postname ">
                        <img className='imgbord' src="https://th.bing.com/th/id/R.ca409fa7e24d876926f3f1d13b112841?rik=RNYJ49QrcRCFKw&riu=http%3a%2f%2ftricky-photoshop.com%2fwp-content%2fuploads%2f2017%2f08%2ffinal-1.png&ehk=bpt4xZN%2fdXYgXYN5mLcjv%2fvab0dC%2bocjihDLHM4Ew%2f0%3d&risl=&pid=ImgRaw&r=0" alt="" />
                        <span className='spanfont' >bobby_george</span>
                        <p className='midtime'>• 8 w</p>
                        <p className='more'>•••</p>
                    </div>
                    <div className="postimg">
                        <img src={koke} alt="koke" />
                    </div>
                    <div className="postbut">
                        <div className="left">
                            <button><img onClick={redlike} id='l3' className='emptlike' src="https://img.icons8.com/?size=100&id=85038&format=png&color=000000" alt="" />
                            </button>                             <img className='comment' src="https://img.icons8.com/?size=100&id=93386&format=png&color=000000" alt="" />
                            <img className='send' src="https://img.icons8.com/?size=100&id=lAJQJFzKedhu&format=png&color=000000" alt="" />
                        </div>
                        <div className="right">
                            <img className='unsave' src="https://img.icons8.com/?size=100&id=82461&format=png&color=000000" alt="" />

                        </div>
                    </div>
                    <div className="postcap">
                        <p className="likedby">Liked by <span style={{ fontWeight: 'bold' }}>lenormand_r</span> and <span style={{ fontWeight: 'bold' }}>others </span></p>
                        <p className="name"> <span style={{ fontWeight: 'bold' }}>bobby_george </span> Koke of atletico madrid has played 600 games for the club of his heart <span style={{ color: '#23527F' }}>#koko #football #goat</span></p>
                        <p className="view">View all 8,263 comments</p>
                        <input type='text' className="addcomment" placeholder='Add a comment...'></input>
                    </div>
                </div>
            </div>
        </div>
    )
}
