import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Col, Card } from "antd";

const LyricCard = ({ tracks }) => {
  return (
    <Fragment>
      {tracks.map(track => {
        const { track_id, track_name, artist_name } = track.track;
        return (
          <Col key={track_id} md={8}>
            <Link
              className="track-link"
              to={{
                pathname: `/lyric/${track_id}`,
                state: {
                  track_detail: {
                    artist_name: artist_name,
                    track_name: track_name
                  }
                }
              }}
            >
              <Card className="box-content">
                <Card.Meta
                  title={<h5 style={{ fontWeight: "bold" }}>{track_name}</h5>}
                  description={artist_name}
                />
              </Card>
            </Link>
          </Col>
        );
      })}
    </Fragment>
  );
};

export default LyricCard;
