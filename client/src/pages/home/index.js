import { useState } from 'react';
import logo from './../../logo.svg';
import './index.css';

function Home() {
  const [packs, setPacks] = useState([{},{},{},{}]);
  const [avatar,setAvatar] = useState([{},{},{},{},{},{},{},{},{},{}]);
  return (
    <div className="Home">

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

      {/* Packs */}
      <h2>Fermentum sed vel.</h2>
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
      <a className="exploreButton">EXPLORE</a>
      
      {/* Section 4 */}
        <div className="section_4">
           <div className="text_area">
                <h2> LOREM IPSUM DOLOR </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Eu ultrices fringilla amet consectetur sed. </p> <br/>
                <a className="exploreButton">SIGN UP</a> 
           </div>

           <div className="packImage">  </div>

        </div>

    </div>
  );
}

export default Home;
