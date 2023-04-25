import { fetchJSON } from "https://js.sabae.cc/fetchJSON.js";

const fetchTextByJSON = async (url, req, method = "GET") => {
  const opt = req ? {
    method,
    mode: "cors",
    cache: "no-cache",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req),
  } : { method };
  //const res = await (await fetch(url, opt)).json();
  const res = await (await fetch(url, opt)).text();
  return res;
};

const url = "http://localhost:50031/user_dict";
const res = await fetchJSON(url);
console.log(res);
for (const id in res) {
  const url = "http://localhost:50031/user_dict_word/" + id + "";
  console.log(url);
  const res = await fetchTextByJSON(url, null, "DELETE");
  console.log(res);
}
