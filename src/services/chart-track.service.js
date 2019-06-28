/**
 * Get chart track by region
 */
import axios from "axios";
import { handleCorsRequest, API_SERVICES } from "../lib";

const { KEY, GET_CHART_TRACK } = API_SERVICES;

async function ChartTrackService(pageSize) {
  try {
    const URL_API = handleCorsRequest(GET_CHART_TRACK(pageSize, KEY));
    const response = await axios(URL_API);
    const { track_list } = response.data.message.body;

    return track_list;
  } catch (error) {
    return Promise.reject(error);
  }
}

export default ChartTrackService;
