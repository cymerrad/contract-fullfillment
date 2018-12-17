import * as fs from "fs";

let artifact: A.Artifact;
fs.readFile("../build/contracts/ZombieOwnership.json", (err, data) => {
	if (err) {
		throw err;
	}
	artifact = JSON.parse(data.toString());

	main();
});


function main() {
	console.log("names", artifact.abi.map(fn => fn.name));
}