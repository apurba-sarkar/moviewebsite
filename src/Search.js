import React from "react";
import { useGlobalContext } from "./context";
import "./search.css"

const Search = () => {
  const { query, setQuery,isError } = useGlobalContext();
  return (
    <div className="container">
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <div>
          <input className="search" type="text" placeholder="search here" value={query} onChange={(e)=>setQuery(e.target.value)}/>
        </div>
      
      </form>
      <div className="">
        <p>{isError.show && isError.msg} </p>
      </div>
    </div>
  );
};

export default Search;
