import React, { useEffect } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    const API_KEY = "adb4320356ef8660531c9ebcb8b0269e";

    const POPULAR_ENDPOIT = () => {
      return `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=id&f_has_lyrics=1&apikey=${API_KEY}`;
    };

    axios(POPULAR_ENDPOIT(), { method: "GET" })
      .then(chart => {
        let { track_list } = chart.data.message.body;
        console.log(track_list)
      })
      .catch(error => console.log(error));
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
