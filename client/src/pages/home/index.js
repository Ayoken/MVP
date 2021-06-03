import { useState } from 'react';
import logo from './../../logo.svg';
import './index.css';

function Home() {
  const [packs, setPacks] = useState([{},{},{},{}]);
  const [avatar,setAvatar] = useState([{},{},{},{},{},{},{},{},{},{},{},{}]);
  return (
    <div className="Home">
      {/* Hero */}
      <div className="Hero_section"> 
      <div className="textpart">
      <h2> Lorem <br/> ipsum dolor</h2 >
      <p id="subtext"> Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit. Consectetur arcu vitae at nec, <br/> commodo vestibulum. Lorem libero amet, at ut. </p>
      <div className="hero_button"> 
      <button className="AboutButton">About Us</button>
      <button className="exploreButton">Explore</button>
      </div> </div> 
        <div className="packImage">
                </div> 
      </div>
      {/* Section 1 */}
      <div className="section_1"> 
      <div className="packImage">
        <button>Explore</button>
      </div>
      <div className="packImage">
      <button>Purchase</button>
      </div>
      </div>
      {/* Section 2 */}
      <div className="section_2">
        <h2> FOLLOW THE LEADERS</h2>
        <p> Keep up with new releases from your favorite creator</p>
        <div className="avatarRow"> {
          avatar.map((avatars) =>
          <div className="avatars"> 
        <div className="packImage"></div>
          </div> )}
        </div>
        
         </div>
      {/* line */}
      <hr></hr>
      {/* Packs */}
    
      <h2>FERMENTUM SED VEl</h2>
      <div className="packRow">
        {
          packs.map((pack) =>
            <div className="pack">
              <div className="packImage">

              </div>
              <p className="packName">PACK NAME</p>
              <p className="packVersion">Series 2 | Release 34</p>
              <p className="packPrice">USD $9.00</p>
              <p className="packQuantity">85516 of 315000 left</p>
            </div>
         
         )
        }
      </div>
      <div className="pack_button">
      <button className="exploreButton">EXPLORE</button>
      </div>
      {/* Section 4 */}
        <div className="section_4">
           <div className="text_area">
                <h2> LOREM IPSUM DOLOR </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Eu ultrices fringilla amet consectetur sed. </p> <br/>
                <button className="exploreButton">SIGN UP</button> 
           </div>

           <div className="packImage">  </div>

        </div>

    </div>
  );
}

export default Home;
