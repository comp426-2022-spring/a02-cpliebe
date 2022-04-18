import { flipACoin } from "./modules/coin.mjs";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));
const call = args['call'];

if (call == "tails" || call == "heads") {
    console.log(flipACoin(call));
} else {
    console.log("Error: no inputs");
    console.log("Usage: node guess-flip --call=[heads|tails]");
}