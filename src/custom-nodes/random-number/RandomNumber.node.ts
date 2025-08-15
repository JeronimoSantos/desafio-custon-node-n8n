import fetch from 'node-fetch';
import type {
  IExecuteFunctions,
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
  NodeConnectionType,
} from 'n8n-workflow';

export class RandomNumber implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Random.org Random Number',
    name: 'randomOrgNumber',
    group: ['transform'],
    version: 1,
    description: 'Gets a random number from Random.org',
    defaults: {
      name: 'Random.org Number',
    },
    inputs: ['main'] as NodeConnectionType[],
    outputs: ['main'] as NodeConnectionType[],
    properties: [
      {
        displayName: 'API Key',
        name: 'apiKey',
        type: 'string',
        typeOptions: { password: true },
        default: '',
        description: 'Your Random.org API key',
      },
      {
        displayName: 'Min',
        name: 'min',
        type: 'number',
        default: 1,
      },
      {
        displayName: 'Max',
        name: 'max',
        type: 'number',
        default: 100,
      },
    ],
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const apiKey = this.getNodeParameter('apiKey', 0) as string;
    const min = this.getNodeParameter('min', 0) as number;
    const max = this.getNodeParameter('max', 0) as number;

    const body = {
      jsonrpc: '2.0',
      method: 'generateIntegers',
      params: {
        apiKey,
        n: 1,
        min,
        max,
        replacement: true,
      },
      id: 42,
    };

    const response = await fetch('https://api.random.org/json-rpc/4/invoke', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

	interface RandomOrgResponse {
  		result?: {
    		random: {
      		data: number[];
    	};
  	};
  		error?: {
    	code: number;
    	message: string;
  	};
}

    const data = (await response.json()) as RandomOrgResponse;

    if (data.error) {
      throw new Error(`Random.org error: ${data.error.message}`);
    }

    if (!data.result || !data.result.random || !Array.isArray(data.result.random.data)) {
      throw new Error('Invalid response from Random.org');
    }
    const randomValue = data.result.random.data[0];

    return [[{ json: { value: randomValue } }]];
  }
}
