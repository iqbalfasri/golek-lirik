import axios from "axios";
import { handleCorsRequest, API_SERVICES } from "../lib";

const { KEY, GET_DETAIL_LYRIC } = API_SERVICES;

async function LyricService(trackId) {
  try {
    const URL_API = handleCorsRequest(GET_DETAIL_LYRIC(trackId, KEY));
    const response = await axios(URL_API);

    return response.data;
  } catch (error) {
    return Promise.reject(error)
  }
}

export default LyricService;
