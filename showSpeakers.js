import { fetchJSON } from "https://js.sabae.cc/fetchJSON.js";
const url = "http://localhost:50031/speakers";
const res = await fetchJSON(url);
console.log(res);
/*
[
  {
    supported_features: { permitted_synthesis_morphing: "ALL" },
    name: "つくよみちゃん",
    speaker_uuid: "3c37646f-3881-5374-2a83-149267990abc",
    styles: [ { name: "れいせい", id: 0 } ],
    version: "0.0.1"
  }
]
*/

