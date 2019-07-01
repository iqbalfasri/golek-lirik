import React, { useState, useEffect } from "react";
import { Row, Skeleton, Col } from "antd";
import { Helmet } from "react-helmet";

// Import Component
import LyricCard from "../components/lyric-card";

// instance API_SERVICES
// const { GET_CHART_TRACK, KEY } = API_SERVICES;

//
import ChartTrackService from "../services/chart-track.service";

const Homepage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [pageSize, setPageSize] = useState(9);

  useEffect(() => {
    ChartTrackService(pageSize)
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(true);
        setErrorMessage("Oops ada kesalahan!");
      });
  }, [pageSize]);

  const handleLoadMore = e => {
    e.preventDefault();
    setPageSize(pageSize + 3);

    // save to localstorage
    localStorage.setItem("page_size_top_track_ID", pageSize);
  };

  const LoadComponentWithLoading = () => {
    if (loading) {
      return (
        <Row gutter={16}>
          <Col md={8}>
            <Skeleton active />
          </Col>
          <Col md={8}>
            <Skeleton active />
          </Col>
          <Col md={8}>
            <Skeleton active />
          </Col>
        </Row>
      );
    } else if (error) {
      return (
        <div>
          <h1>{errorMessage}</h1>
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <div className="card-content">
            <Row gutter={16}>
              <LyricCard tracks={data} />
            </Row>
          </div>
          <button className="load-more-button" onClick={handleLoadMore}>
            Load more
          </button>
        </React.Fragment>
      );
    }
  };

  return (
    <div>
      <Helmet>
        <title>Golek Lirik - Home</title>
      </Helmet>
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
          <LoadComponentWithLoading />
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
