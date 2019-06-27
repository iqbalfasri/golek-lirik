import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "antd";
import axios from "axios";
import { handleCorsRequest } from "../lib";

// Import Component
import LyricCard from "../components/lyric-card";

const Homepage = () => {
  const [data, setData] = useState([]);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    async function fetchPopularLyrics() {
      const API_KEY = "adb4320356ef8660531c9ebcb8b0269e";
      const URL_API = handleCorsRequest(
        `https://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=${pageSize}&country=id&f_has_lyrics=1&apikey=${API_KEY}`
      );

      const result = await axios(URL_API);
      const { track_list } = result.data.message.body;
      setData(track_list);
    }

    fetchPopularLyrics();
  }, [pageSize]);

  const handleLoadMore = e => {
    e.preventDefault();
    setPageSize(pageSize + 10);

    // save to localstorage
    localStorage.setItem("page_size_top_track_ID", pageSize);
  };

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
      <div className="container">
        {/* Content */}
        <div className="content">
          <div>
            <h3>Lagu terpopuler indonesia</h3>
          </div>
          <div className="card-content">
            <Row gutter={16}>
              <LyricCard tracks={data} />
            </Row>
          </div>
          <button onClick={handleLoadMore}>Load more</button>
        </div>
        {/* Footer */}
        <div>
          <center>
            <h3>Footer disini</h3>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
