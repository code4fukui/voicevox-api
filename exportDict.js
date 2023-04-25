import { fetchJSON } from "https://js.sabae.cc/fetchJSON.js";
import { CSV } from "https://js.sabae.cc/CSV.js";

const url = "http://localhost:50031/user_dict";
const res = await fetchJSON(url);
console.log(res);
const list = [];
for (const id in res) {
  const obj = { id };
  Object.assign(obj, res[id]);
  list.push(obj);
}
await Deno.writeTextFile("user_dict.csv", CSV.stringify(list));
