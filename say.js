import { fetchAudio } from "./fetchAudio.js";

if (Deno.args.length == 0) {
  console.log("deno run -A say.js [text] (speakerid) (endpoint)");
  Deno.exit(1);
}

const text = Deno.args[0];
const speakerid = Deno.args[1] || 0;
const endpoint = Deno.args[2] || undefined;

console.log(text);
const bin = await fetchAudio(text, speakerid, endpoint);
await Deno.writeFile("out.wav", bin);
