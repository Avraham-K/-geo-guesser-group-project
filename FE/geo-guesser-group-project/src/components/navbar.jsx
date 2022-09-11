import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { UsersContext } from "../Context/Context-Users";

function NavBar(props) {
//   const { isAdmin, isLogin } = useContext(UsersContext);

  return (
    <nav className="navBar">
      <ul className="nav-links">
        <li>
          <Link className="link" to="/">
            Start
          </Link>
        </li>

        <li>
          <Link className="link" to="/main">
            Main
          </Link>
        </li>

        
          <li>
            <Link className="link" to="/admin">
              Admin
            </Link>
          </li>
      </ul>
    </nav>
  );
}

export default NavBar;
