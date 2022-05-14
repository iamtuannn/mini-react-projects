import React, { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GithubProfileContext } from "./GithubProfileContext";

export default function SearchUser() {
  const { isError, setUsername } = useContext(GithubProfileContext);

  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue !== "") {
      setUsername(searchValue);
    }
  };

  return (
    <div className=" bg-box-00 rounded-2xl py-2 px-4 w-full">
      <form onSubmit={handleSubmit} className=" items-center flex relative">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search Github username"
          className=" w-full bg-inherit py-2 px-4 outline-none placeholder:text-base-color-00 text-md lowercase"
        />
        <button type="submit">
          <FaSearch />
        </button>
        {isError && (
          <span className="absolute right-12 text-lg text-red-500 uppercase font-khand font-semibold">
            No result
          </span>
        )}
      </form>
    </div>
  );
}
