import { fetchJSON } from "https://js.sabae.cc/fetchJSON.js";
import { fetchBinByJSON } from "https://js.sabae.cc/fetchBinByJSON.js";

export const fetchAudio = async (text, speaker = 0) => {
  const req = {
    text,
    speaker,
  };
  const urlpre = `http://localhost:50031/audio_query?text=${encodeURIComponent(text)}&speaker=${speaker}`;
  const json = await fetchJSON(urlpre, req);
  //console.log(json);
  
  const url = "http://localhost:50031/synthesis";
  const bin = await fetchBinByJSON(`${url}?speaker=${speaker}&core_version=0.0.0&enable_interrogative_upspeak=true`, json);
  return bin;
};
