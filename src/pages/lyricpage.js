import React, { useEffect, useState } from "react";
import axios from "axios";
import { handleCorsRequest } from "../lib";

const Lyricpage = props => {
  const { track_id } = props.match.params;
  const [lyric, setLyric] = useState("");
  const [trackName, setTrackName] = useState("");
  const [trackNotFound, setTrackNotFound] = useState(false);

  useEffect(() => {
    async function fetchLyric() {
      const API_KEY = "adb4320356ef8660531c9ebcb8b0269e";
      const URL_API = handleCorsRequest(
        `http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${track_id}&apikey=${API_KEY}`
      );

      try {
        const result = await axios(URL_API);
        const { lyrics_body } = await result.data.message.body.lyrics;
        setLyric(lyrics_body);
      } catch (error) {
        setTrackNotFound(true);
      }
    }

    async function fetchDetailTrack() {
      const API_KEY = "adb4320356ef8660531c9ebcb8b0269e";
      const URL_API = handleCorsRequest(
        `http://api.musixmatch.com/ws/1.1/track.get?track_id=${track_id}&apikey=${API_KEY}`
      );

      try {
        const result = await axios(URL_API);
        const { track_name } = result.data.message.body.track;
        setTrackName(track_name);
      } catch (error) {
        setTrackNotFound(true);
      }
    }

    fetchLyric();
    fetchDetailTrack();
  });

  return (
    <React.Fragment>
      {trackNotFound && <h1>TRACK TIDAK DITEMUKAN</h1>}
      <div className="container">
        <h1>{trackName}</h1>
        <pre>{lyric}</pre>
      </div>
    </React.Fragment>
  );
};

export default Lyricpage;
