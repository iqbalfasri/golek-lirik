import { useState, useEffect } from "react";
import axios from "axios";

/**
 * Mengatasi cors pada saat request data
 */
const handleCorsRequest = url => {
  return `https://cors-anywhere.herokuapp.com/${url}`;
};

/**
 * API Service
 * API-KEY
 */
const API_SERVICES = {
  KEY: "adb4320356ef8660531c9ebcb8b0269e",
  GET_DETAIL_TRACK: (track_id, api_key) => {
    return `http://api.musixmatch.com/ws/1.1/track.get?track_id=${track_id}&apikey=${api_key}`;
  },
  GET_DETAIL_LYRIC: (track_id, api_key) => {
    return `http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${track_id}&apikey=${api_key}`;
  },
  GET_CHART_TRACK: (page_size, api_key) => {
    return `https://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=${page_size}&country=id&f_has_lyrics=1&apikey=${api_key}`;
  },
  GET_ALBUM_DETAIL: (album_id, api_key) => {
    return `https://api.musixmatch.com/ws/1.1/album.get?album_id=${album_id}&apikey=${api_key}`;
  }
};

/**
 * Easy response
 * with loading and React Hooks
 */
const useFetch = (url, pageSize) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUrl = async () => {
    const response = await axios(url);
    const { data } = response;

    setData(data.message.body);
    setLoading(false);
  };

  useEffect(() => {
    fetchUrl();
  }, [pageSize]);

  return [data, loading];
};

export { handleCorsRequest, API_SERVICES, useFetch };
