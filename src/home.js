import React, { useContext } from "react";
import { AppContext, useGlobalContext } from "./context";
import Search from "./Search";
import Movie from "./Movie";

const Home = () => {
  // const name = useContext(AppContext)
  // const name = useGlobalContext()
  return (
    <div>
      <Search />
      <Movie />
    </div>
  );
};

export default Home;
