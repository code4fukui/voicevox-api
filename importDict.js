import { fetchTextByJSON } from "https://js.sabae.cc/fetchTextByJSON.js";
import { CSV } from "https://js.sabae.cc/CSV.js";

const data = await CSV.fetchJSON("user_dict.csv");
const list = {};
for (const d of data) {
  for (const name in d) {
    const nd = parseInt(d[name]);
    if (d[name] == nd) {
      d[name] = nd;
    }
  }
  const id = d.id;
  delete d.id;
  list[id] = d;
}
console.log(list);
const url = "http://localhost:50031/import_user_dict?override=true";
const res = await fetchTextByJSON(url, list);
console.log(res);
