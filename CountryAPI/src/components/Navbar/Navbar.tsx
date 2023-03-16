import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";
import "./Navbar.css";

const Navbar = ({
  theme,
  setTheme,
}: {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const handleTheme = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <nav className={theme}>
      <div>
        <h1>Where in the world?</h1>
      </div>
      <div className="theme-switch-wrapper" onClick={(e) => handleTheme(e)}>
        <label className="theme-switch" htmlFor="checkbox">
          <input type="checkbox" id="checkbox" />
          <div className="slider round"></div>
        </label>
        {theme === "light" ? (
          <IoMoonOutline className="moon" />
        ) : (
          <IoMoonSharp className="moon" />
        )}

        <p className={theme}>Dark Mode</p>
      </div>
    </nav>
  );
};

export default Navbar;
