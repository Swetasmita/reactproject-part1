import React, { useState } from "react";
import "./searchbar.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  //Fetch Data
  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const filteredItem = json.filter((item) => {
          return (
            value &&
            item &&
            item.name &&
            item.name.toLowerCase().includes(value.toLowerCase())
          );
        });
        // console.log("filtered Item: ",filteredItem);
        setResults(filteredItem);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };
  //Handle Fetch Data
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <div className="searchbar-container">
      <div className="searchbar-wrapper">
        <FaSearch id="search-icon" />
        <input
          tyep="text"
          placeholder="Type to search..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <div className="searchbar-result">
        {
        results.map((item, key) => {
          return (
            <div className="result-list" key={key}>
              {item.name}
            </div>
          );
        })
       }
      </div>
    </div>
  );
};

export default SearchBar;
