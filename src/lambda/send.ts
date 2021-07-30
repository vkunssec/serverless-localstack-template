import { send as sendSQS } from "../core/sqs";

async function send(event, context) {
    try {
        const res = await sendSQS({
            title: "Test",
            body: "Testing SQS LocalStack"
        });
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

export const handler = send;
