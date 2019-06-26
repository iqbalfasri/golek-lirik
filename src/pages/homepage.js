import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import { handleCorsRequest } from "../lib";

const Homepage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchPopularLyrics() {
      const API_KEY = "adb4320356ef8660531c9ebcb8b0269e";
      const URL_API = handleCorsRequest(
        `https://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=id&f_has_lyrics=1&apikey=${API_KEY}`
      );

      const result = await axios(URL_API);
      const { track_list } = result.data.message.body;
      setData(track_list);
    }

    fetchPopularLyrics();
  }, []);

  const { Meta } = Card;

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
            <Row gutter={16}>
              {data.map((tracks, index) => {
                const { track } = tracks;
                console.log(track);
                return (
                  <Col key={track.track_id} md={8}>
                    <Link className="track-link" to={`/lyric/${track.track_id}`}>
                      <Card className="box-content">
                        <Meta
                          title={
                            <h5 style={{ fontWeight: "bold" }}>
                              {track.track_name}
                            </h5>
                          }
                          description={track.artist_name}
                        />
                      </Card>
                    </Link>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
