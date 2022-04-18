import { coinFlips, countFlips } from "./modules/coin.mjs";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const args = require('minimist')(process.argv.slice(2))
const result = coinFlips(args.number);
if (args.number == 0) {
    console.log("(\\[?\\s?['\"]?(heads|tails)['\"]?.*\\])(\\n|\\t|\\s|\\r)+(\\{.*\\s?['\"]?(heads|tails)\\s?['\"]?:\\s?['\"]?1['\"]?\\s?\\})")
}
else {
console.log(result, countFlips(result));
}