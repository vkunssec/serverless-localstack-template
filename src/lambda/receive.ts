import { receive as receiveSQS } from "../core/sqs";

async function receive(event, context) {
    try {
        const res = await receiveSQS();
        return {
            statusCode: 200, 
            body: JSON.stringify(res),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error),
        };
    }
}

export const handler = receive;
