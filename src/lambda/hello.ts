import message from "../api/message";

export const handler = async (event: any, context: any): Promise<object> => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: message(),
        stage: process.env.STAGE,
        version: '1.0.0',
        event, context
      },
      null,
      2
    ),
  };
};
