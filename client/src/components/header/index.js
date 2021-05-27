import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './index.css';

function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/packs">Packs</Link>
        </li>
        <li>
          <Link to="/market">The Market</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
