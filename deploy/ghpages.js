import path from "path";
import { fileURLToPath } from "url";
import ghpages from "gh-pages";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const options = {
  branch: "gh-pages",
  repo: "https://github.com/potatoatsang/school-speech.git",
};
const callback = (err) => {
  if (err) console.error(err);
  else console.log("publish success");
};
ghpages.publish(path.resolve(__dirname, "../dist"), options, callback);
