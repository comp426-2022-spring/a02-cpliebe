// Import the coinFlips function from your coin.mjs file
import { coinFlips} from "./modules/coin.mjs";
// Call the coinFlips function and put the return into STDOUT
import minimist from "minimist";
import { countFlips } from "./modules/coin.mjs";

const args = minimist(process.argv.slice(2))
args["number"]
const number = args.number || 1

var flipNum = coinFlips(number);

    console.log(flipNum)
    console.log(countFlips(flipNum))