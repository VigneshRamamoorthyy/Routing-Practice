import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-title-div">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png "
        className="logo"
        alt="wave"
      />
      <h1 className="nav-item">Wave</h1>
    </div>
    <ul className="nav-menu">
      <li>
        <Link className="nav-item" to="/">
          Home
        </Link>
      </li>

      <li>
        <Link className="nav-item" to="/about">
          About
        </Link>
      </li>

      <li>
        <Link className="nav-item" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
