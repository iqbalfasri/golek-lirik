import React, { useState, useEffect } from "react";
import axios from "axios";

const Homepage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchPopularLyrics() {
      const API_KEY = "adb4320356ef8660531c9ebcb8b0269e";
      const URL_API = `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=id&f_has_lyrics=1&apikey=${API_KEY}`;

      const result = await axios(URL_API);
      const { track_list } = result.data.message.body;
      setData(track_list);
    }

    fetchPopularLyrics();
  }, []);

  // Mapping data
  data.map((track, index) => console.log(track.track))

  return (
    <div>
      <header className="header-wrapper">
        <h1>Cari lirik lagu popular di indonesia</h1>
      </header>
    </div>
  );
};

export default Homepage;
