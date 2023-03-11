import React, { useEffect, useState } from "react";
import Countries from "./data.json";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import { Country } from "./interfaces/interfaces";

function App() {
  const [data, setData] = useState<Country[]>([]);

  useEffect(() => {
    setData(Countries);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <SearchBar countries={data} />
    </div>
  );
}

export default App;
