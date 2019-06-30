import axios from "axios";
import { handleCorsRequest, API_SERVICES } from "../lib";

const { KEY, GET_DETAIL_LYRIC } = API_SERVICES;

async function LyricService(trackId) {
  try {
    const URL_API = handleCorsRequest(GET_DETAIL_LYRIC(trackId, KEY));
    const response = await axios(URL_API);
    const { lyrics_body } = response.data.message.body.lyrics;

    return lyrics_body;
  } catch (error) {
    return Promise.reject(error)
  }
}

export default LyricService;
