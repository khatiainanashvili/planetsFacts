import { Link, Outlet } from "react-router-dom";
import burger from "./assets/images/icon-hamburger.svg";
import { useState } from "react";
export default function Root() {
  const [active, setActive] = useState(true);
  const handleClick = () => {
    setActive(!active)
  }
  return (
    <header>
      <div className="header-top">
        <h3 className="title">THE PLANETS</h3>
        <img
          src={burger}
          alt="burger image"
          onClick={handleClick}
          className={active == false ? "burger-active" : ""}
        />
      </div>
      <nav className={active == true ? "hiden-nav" : ""}>
        <ul>
          <li>
            <Link className="merkury" to="/mercury" onClick={handleClick}>
              MERCURY
            </Link>
          </li>
          <li>
            <Link className="venus" to="/venus" onClick={handleClick}>
              VENUS
            </Link>
          </li>
          <li>
            <Link className="earth" to="/earth" onClick={handleClick}>
              EARTH
            </Link>
          </li>
          <li>
            <Link className="mars" to="/mars" onClick={handleClick}>
              MARS
            </Link>
          </li>
          <li>
            <Link className="jupiter" to="/jupiter" onClick={handleClick}>
              JUPITER
            </Link>
          </li>
          <li>
            <Link className="saturn" to="/saturn" onClick={handleClick}>
              SATURN
            </Link>
          </li>
          <li>
            <Link className="uranus" to="/uranus" onClick={handleClick}>
              URANUS
            </Link>
          </li>
          <li>
            <Link to="/neptune" className="neptune" onClick={handleClick}>
              NEPTUNE
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </header>
  );
}
