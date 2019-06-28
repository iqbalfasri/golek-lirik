import React, { useState, useEffect, useReducer } from "react";
import { Row } from "antd";
import axios from "axios";
import { handleCorsRequest, API_SERVICES } from "../lib";

// Import Component
import LyricCard from "../components/lyric-card";

// instance API_SERVICES
// const { GET_CHART_TRACK, KEY } = API_SERVICES;

//
import ChartTrackService from "../services/chart-track.service";

const Homepage = () => {
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    ChartTrackService(pageSize)
      .then(data => {
        setData(data);
      })
      .catch(error => {
        setErrorMessage(error);
      });
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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sollicitudin dapibus ligula, quis volutpat tellus gravida at. Ut
              in lacinia nulla.
            </p>
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
            <p>Copyright 2019 &copy;</p>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
