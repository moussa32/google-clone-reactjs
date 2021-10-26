import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce/lib";
import { useResultContext } from "../contexts/ResultContextProvider";
import { MdDelete } from "react-icons/md";
import Links from "./Links";

const Search = () => {
  const [text, setText] = useState("");
  const { setSearchTerm } = useResultContext();
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        type="text"
        value={text}
        className="sm:w-96 w-80 h-10 dark:bg-gray-200 rounded-full shadow-sm outline-none p-6 text-black hover:shadow-md transition-all"
        placeholder="Search Goggl or type url"
        onChange={e => setText(e.target.value)}
      />
      {text && (
        <button
          type="button"
          className="absolute top-3 right-7 text-2xl text-gray-500"
          onClick={() => setText("")}
        >
          <MdDelete className="text-red-500" />
        </button>
      )}
      <Links />
    </div>
  );
};

export default Search;
