import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="header__container">
      <ul>
        <li>
          <Link to="/">Weather</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
}
