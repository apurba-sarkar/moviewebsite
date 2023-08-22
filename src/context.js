import { useContext, useEffect, useState } from "react";
import React from "react";





// context(warehouse)
// provider
// consumer/ useContext

export const url = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  // const MyLoader = () => <ContentLoader />
 
  

  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: "false", message: "" });
  const [query, setQuery] = useState("titanic");


  const getMovies = async (url) => {
    setIsLoading(true)
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data.Search);
      } else {
        setIsError({ show: true, message : data.Error});
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    let timerOut = setTimeout(()=>{
      getMovies(`${url} &s=${query} `);

    },12)
    return()=> clearTimeout(timerOut)
  }, [query]);

  return (
    <AppContext.Provider value={{ isLoading, isError, movie, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

// global hooks
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
