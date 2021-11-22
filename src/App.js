import react from "react";
import "tailwindcss/tailwind.css";
import axios from "axios";
import { useState } from "react";
import Container from "./Components/Container/Container";
import MediaQuery from "react-responsive";

function App() {
  const [param, setParam] = useState("");

  function getInputValue() {
    var inputVal = document.getElementById("searchinput").value;

    var options = {
      method: "GET",
      url: "https://imdb8.p.rapidapi.com/auto-complete",
      params: { q: inputVal },
      headers: {
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
        "x-rapidapi-key": "-YOUR-RAPIDAPI-KEY",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setParam(response.data.d);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <div className="">
      <div className="flex justify-center mt-8">
        <a href="http://imdbfinder.netlify.app">
          <img className="" src="https://i.hizliresim.com/jw3rrue.png"></img>
        </a>
      </div>
      <div className="justify-center text-center items-center mt-5">
        <input
          id="searchinput"
          placeholder="Tell me anything..."
          className="compgri text-gray-500 font-bold  hover:opacity-30 transition ease-in  border-1 rounded-xl p-1 w-96 shadow-lg placeholder-gray-500 andika opacity-90 "
        />
        <button
          onClick={getInputValue}
          className="text-gray-500 ml-2  border-1 p-1 pl-3 pr-3 font-bold compgri rounded-xl  hover:opacity-30 transition ease duration-200 shadow-lg opacity-90 andika"
        >
          FIND
        </button>
      </div>
      <Container data={param} />
      <div className="justify-center text-center mt-2 ">
        The information is provided by{" "}
        <a
          className="text-blue-400 hover:text-blue-500 transition"
          href="http://imdb.com"
        >
          IMDB.
        </a>
      </div>
    </div>
  );
}

export default App;
