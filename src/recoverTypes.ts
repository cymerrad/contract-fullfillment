import * as fs from "fs";

const moduleName = "ZombieOwnership";

let artifact: A.Artifact;
fs.readFile(`./build/contracts/${moduleName}.json`, (err, data) => {
	if (err) {
		throw err;
	}
	artifact = JSON.parse(data.toString());

	main();
});


function main() {
	console.log("names", artifact.abi.map(fn => fn.name));


}
