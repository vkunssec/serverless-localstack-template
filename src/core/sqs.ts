import { SQS } from "aws-sdk";

export const send = async (values) => {
    const sqs = new SQS({
        endpoint: "http://localhost:4566",
    });
    const params = {
        QueueUrl: process.env.QUEUE_URL,
        MessageBody: JSON.stringify(values),
    };
    console.log(process.env.QUEUE_URL);
    console.log(process.env.QUEUE_NAME);
    console.log(process.env.QUEUE_ARN);

    try {
        return await sqs.sendMessage(params).promise();
    } catch (error) {
        return new Error(error);
    }
};

export const receive = async () => {
    const sqs = new SQS({
        endpoint: "http://localhost:4566",
    });
    const params = {
        QueueUrl: process.env.QUEUE_URL,
        MaxNumberOfMessages: 1,
        VisibilityTimeout: 0,
        WaitTimeSeconds: 0
    };

    try {
        const res = await sqs.receiveMessage(params).promise();
        console.log(res);
        return res;
    } catch (error) {
        return new Error(error);
    }
};
