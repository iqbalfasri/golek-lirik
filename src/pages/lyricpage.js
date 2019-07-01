import React, { useEffect, useState } from "react";
import axios from "axios";
import { handleCorsRequest, API_SERVICES } from "../lib";
import SetHead from "../components/head";

import LyricService from "../services/lyric.service";

const { KEY, GET_DETAIL_TRACK } = API_SERVICES;

const Lyricpage = props => {
  const { track_id } = props.match.params;
  const [lyric, setLyric] = useState("");
  const [trackName, setTrackName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [trackNotFound, setTrackNotFound] = useState(false);

  useEffect(() => {
    LyricService(track_id)
      .then(data => {
        setLyric(data);
      })
      .catch(error => {
        console.log(error);
      });

    async function fetchDetailTrack() {
      const URL_API = handleCorsRequest(GET_DETAIL_TRACK(track_id, KEY));

      try {
        const result = await axios(URL_API);
        const { track_name, artist_name } = result.data.message.body.track;
        setTrackName(track_name);
        setArtistName(artist_name);
      } catch (error) {
        setTrackNotFound(true);
      }
    }

    // fetchLyric();
    fetchDetailTrack();
  }, [lyric]);

  return (
    <React.Fragment>
      <SetHead title={`${trackName} - ${artistName}`} />
      {trackNotFound && <h1>TRACK TIDAK DITEMUKAN</h1>}
      <div className="container">
        <h1>{trackName}</h1>
        <pre>{lyric}</pre>
      </div>
    </React.Fragment>
  );
};

export default Lyricpage;
