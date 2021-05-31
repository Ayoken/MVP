import { useState } from 'react';
import logo from './../../logo.svg';
import './index.css';

function Home() {
  const [packs, setPacks] = useState([{},{},{},{}]);

  return (
    <div className="Home">

      {/* Packs */}
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
      <a>EXPLORE</a>
    </div>
  );
}

export default Home;
