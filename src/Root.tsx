import { Link, Outlet } from "react-router-dom";
import burger from "./assets/images/icon-hamburger.svg";
import { useState } from "react";
export default function Root() {
  const [active, setActive] = useState(true);

  return (
    <header>
      <div className="header-top">
        <h3 className="title">THE PLANETS</h3>
        <img
          src={burger}
          alt="burger image"
          onClick={() => setActive(!active)}
          className={active == false ? "burger-active" : ""}
        />
      </div>
      <nav className={active == true ? "hiden-nav" : ""}>
        <ul>
          <li>
            <Link className="merkury" to="/mercury">
              MERCURY
            </Link>
          </li>
          <li>
            <Link className="venus" to="/venus">
              VENUS
            </Link>
          </li>
          <li>
            <Link className="earth" to="/earth">
              EARTH
            </Link>
          </li>
          <li>
            <Link className="mars" to="/mars">
              MARS
            </Link>
          </li>
          <li>
            <Link className="jupiter" to="/jupiter">
              JUPITER
            </Link>
          </li>
          <li>
            <Link className="saturn" to="/saturn">
              SATURN
            </Link>
          </li>
          <li>
            <Link className="uranus" to="/uranus">
              URANUS
            </Link>
          </li>
          <li>
            <Link to="/neptune" className="neptune">
              NEPTUNE
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </header>
  );
}
