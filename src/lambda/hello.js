import message from "../api/message";

export const handler = async (event, context) => {
  return {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: 200,
    body: JSON.stringify(
      {
        message: await message(),
        stage: process.env.STAGE,
        version: '1.0.0',
        input: event,
      },
      null,
      2
    ),
  };
};
