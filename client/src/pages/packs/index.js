import { useState } from 'react';
import logo from './../../logo.svg';
import './index.css';

function Packs() {
  const [packs, setPacks] = useState([{},{},{},{}]);
    return (
    <div className="Packs">
{/* section_1 */}
<div className="Psection_1">
<div classname="text"> <h2> PACKS</h2> </div>
<div className="Images">
<div className="packImage"></div>
<div className="packImage"></div>
</div>
</div>
{/* section_2 */}
<div className="Psection_2">
<h2>NEW PACKS</h2>
<p id="text2">  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nisi venenatis  </p>
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
      <button className="exploreButton">View More</button>
      </div>
    </div>
{/* section_3 */}
<div className="Psection_2">
<h2>PREVIOUS PACKS</h2>
<p id="text2">  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nisi venenatis  </p>
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
      <button className="exploreButton">View More</button>
      </div>
    </div>

    {/* section_2 */}
<div className="Psection_2">
<h2>UPCOMING PACKS</h2>
<p id="text2">  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nisi venenatis  </p>
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
      <button className="exploreButton">View More</button>
      </div>
    </div>

    
    
    </div>
  );
}

export default Packs;
