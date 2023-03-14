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

  useEffect(() => {
    setData(Countries);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchBar countries={data} />} />
          <Route path="/:country" element={<SingleCountry countries={data}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
