import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countries from "./data.json";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import { Country } from "./interfaces/interfaces";
import SingleCountry from "./components/SingleCountry/SingleCountry";

function App() {
  const [data, setData] = useState<Country[]>([]);
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    setData(Countries);
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<SearchBar theme={theme} countries={data} />}
          />
          <Route
            path="/:country"
            element={<SingleCountry theme={theme} countries={data} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
