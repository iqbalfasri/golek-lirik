import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

const Homepage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchPopularLyrics() {
      const API_KEY = "adb4320356ef8660531c9ebcb8b0269e";
      const URL_API = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=id&f_has_lyrics=1&apikey=${API_KEY}`;

      const result = await axios(URL_API);
      const { track_list } = result.data.message.body;
      setData(track_list);
    }

    fetchPopularLyrics();
  }, []);

  return (
    <div>
      <header className="header-wrapper">
        <div className="container">
          <div className="col-md-8">
            <h1>Cari lirik lagu popular</h1>
            <input placeholder="Masukan judul lagu" className="search-style" />
          </div>
        </div>
      </header>
      {/* Content */}
      <div className="container">
        <div className="content">
          <div>
            <h3>Lagu terpopuler indonesia</h3>
          </div>
          <div>
            <div className="row">
              {data.map((tracks, index) => {
                const { track } = tracks;
                console.log(track);
                return (
                  <div className="col-md-4" key={track.track_id}>
                    <Link to={`/lyric/${track.track_id}`} className="box-content">
                      <h5>{track.track_name}</h5>
                      <p className="subtitle">{track.artist_name}</p>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
