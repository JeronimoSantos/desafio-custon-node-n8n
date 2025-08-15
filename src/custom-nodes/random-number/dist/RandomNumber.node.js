"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomNumber = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
class RandomNumber {
    constructor() {
        this.description = {
            displayName: 'Random.org Random Number',
            name: 'randomOrgNumber',
            group: ['transform'],
            version: 1,
            description: 'Gets a random number from Random.org',
            defaults: {
                name: 'Random.org Number',
            },
            inputs: ['main'],
            outputs: ['main'],
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
    }
    async execute() {
        const apiKey = this.getNodeParameter('apiKey', 0);
        const min = this.getNodeParameter('min', 0);
        const max = this.getNodeParameter('max', 0);
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
        const response = await (0, node_fetch_1.default)('https://api.random.org/json-rpc/4/invoke', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        const data = (await response.json());
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
exports.RandomNumber = RandomNumber;
