import { useState } from "react";

const SearchBar = ({ setSearchValue }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const text = e.target.value;
    setValue(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchValue(value);
    setValue("");
  };

  return (
    <form id={"search"} onSubmit={handleSubmit}>
      <label htmlFor="search">
        <input
          className={"drop-shadow-xl border-2 border-black rounded p-1"}
          type={"text"}
          placeholder={"Search user..."}
          value={value}
          onChange={handleChange}
        />
      </label>
    </form>
  );
};

export default SearchBar;
