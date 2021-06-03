import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './index.css';

function Header() {
  return (
    <nav className='header'>
      <ul className='headerJustify'>
        <li>
          <Link to="/">Home</Link>
        </li>
        
        <div className='navGroups'>
          <li>
            <Link to="/packs">Packs</Link>
          </li>
          <li>
            <Link to="/market">The Market</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </div>

        <div className='navGroups'>
          <li>
            <Link to="/about">Log in</Link>
          </li>
          <li>
            <Link to="/about">Sign up</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Header;
