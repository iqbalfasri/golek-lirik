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
  }
};

export { handleCorsRequest, API_SERVICES };
