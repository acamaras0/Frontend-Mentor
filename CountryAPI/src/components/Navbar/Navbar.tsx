import { IoMoonOutline } from "react-icons/io5";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div>
        <h1>Where in the world?</h1>
      </div>
      <div className="theme-switch-wrapper">
        <label className="theme-switch" htmlFor="checkbox">
          <input type="checkbox" id="checkbox" />
          <div className="slider round"></div>
        </label>
        <IoMoonOutline className="moon" />
        <p>Dark Mode</p>
      </div>
    </nav>
  );
};

export default Navbar;
