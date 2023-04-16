import React,{ useState } from "react";
import "./SearchBar.css";
var data = require("./banks.json");

export default function SearchBar() {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log("search ", searchTerm);
  };

  return (
    <div className="App">
      <div className="search-container">
        <div className="search-inner">
          <input type="text"placeholder="Enter bank name" value={value} onChange={onChange} />
        </div>
        <div className="dropdown">
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              let bankName = item.bank_name.toLowerCase();

              return (
                searchTerm &&
                bankName.startsWith(searchTerm) &&
                bankName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.bank_name)}
                className="dropdown-row"
                key={item.bank_name}
              >
                {item.bank_name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
