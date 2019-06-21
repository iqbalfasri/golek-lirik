import React, { useEffect, useState } from "react";
import axios from "axios";

const Lyricpage = props => {
  const [lyric, setLyric] = useState("");
  const [trackNotFound, setTrackNotFound] = useState(false);
  const { track_id } = props.match.params;

  useEffect(() => {
    async function fetchLyric() {
      const API_KEY = "adb4320356ef8660531c9ebcb8b0269e";
      const URL_API = `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${track_id}&apikey=${API_KEY}`;

      try {
        const result = await axios(URL_API);
        const { lyrics_body } = await result.data.message.body.lyrics;
        setLyric(lyrics_body);
      } catch (error) {
        // rubah state trackNotFound menjadi = true
        setTrackNotFound(true);
      }
    }

    fetchLyric();
  }, []);

  return (
    <React.Fragment>
      {trackNotFound && <h1>TRACK TIDAK DITEMUKAN</h1>}
      <div>
        <h1>Lyricpage</h1>
        <pre>{lyric}</pre>
      </div>
    </React.Fragment>
  );
};

export default Lyricpage;
