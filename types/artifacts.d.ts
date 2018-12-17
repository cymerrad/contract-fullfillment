declare namespace A {
	export interface Artifact {
		abi: AbiFunction[];
		bytecode: string;
		deployedBytecode: string;
		sourceMap: string;
		deployedSourceMap: string;
		source: string;
		sourcePath: string;
		ast: any; // TODO
		compiler: {
			name: string;
			version: string;
		};

		network: Map<string, {
			events: any; // TODO
			links: Map<Contract, Address>;
			address: string;
			transactionHash: string;
		}>;

		schemaVersion: string;
		updatedAt: string;
		devdoc: any; // TODO? this one is going to be difficult
		userdoc: any; // same
	}

	export interface AbiFunction {
		constant: boolean;
		inputs: AbiInput[];
		name: string;
		outputs: any[];
		payable: boolean;
		stateMutability: string;
		type: string;
		signature: string;
	}


	export interface AbiInput {
		name: string;
		type: string;
	}

	export type Address = string;
	export type Contract = string;
}

