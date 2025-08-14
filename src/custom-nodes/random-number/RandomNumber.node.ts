import { IExecuteFunctions } from 'n8n-workflow';
import { INodeExecutionData, INodeType, INodeTypeDescription } from 'n8n-workflow';
import type { NodeConnectionType } from 'n8n-workflow';

export class RandomNumber implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Random Number',
		name: 'randomNumber',
		icon: 'file:random.svg',
		group: ['transform'],
		version: 1,
		description: 'Generate a random integer between min and max (inclusive)',
		defaults: {
			name: 'Random Number',
		},
		inputs: ['main'] as NodeConnectionType[],
		outputs: ['main'] as NodeConnectionType[],
		properties: [
			{
				displayName: 'Min',
				name: 'min',
				type: 'number',
				default: 1,
				description: 'Minimum value (inclusive)',
			},
			{
				displayName: 'Max',
				name: 'max',
				type: 'number',
				default: 100,
				description: 'Maximum value (inclusive)',
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		let returnData: INodeExecutionData[] = [];

		for (let i = 0; i < items.length; i++) {
			const min = this.getNodeParameter('min', i) as number;
			const max = this.getNodeParameter('max', i) as number;

			// Gera número aleatório
			const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

			returnData.push({ json: { result: randomNumber, min, max } });
		}

		return [returnData];
	}
}
