import { fetchJSON } from "https://js.sabae.cc/fetchJSON.js";
import { fetchBinByJSON } from "https://js.sabae.cc/fetchBinByJSON.js";

export const fetchAudio = async (text, speaker = 0, endpoint = "http://localhost:50031") => {
  const req = {
    text,
    speaker,
  };
  const urlpre = endpoint + `/audio_query?text=${encodeURIComponent(text)}&speaker=${speaker}&core_version=0.0.0`;
  const json = await fetchJSON(urlpre, req);
  console.log(json);
  
  const url = endpoint + "/synthesis";
  const bin = await fetchBinByJSON(`${url}?speaker=${speaker}&core_version=0.0.0&enable_interrogative_upspeak=true`, json);
  return bin;
};
