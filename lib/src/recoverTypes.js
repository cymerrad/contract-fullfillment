"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var moduleName = "ZombieOwnership";
var artifact;
fs.readFile("./build/contracts/" + moduleName + ".json", function (err, data) {
    if (err) {
        throw err;
    }
    artifact = JSON.parse(data.toString());
    main();
});
function main() {
    console.log("names", artifact.abi.map(function (fn) { return fn.name; }));
}
