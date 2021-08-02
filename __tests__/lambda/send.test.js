import { handler } from "../../src/lambda/send";

describe('Envio de mensagem por SQS', () => {
    test('resposta sucesso de envio', async () => {
        const response = await handler();

        expect(response).toBeDefined();

        expect(response.statusCode).toBe(200);
        expect(typeof response.body).toBe('string');
    });

    test.todo('erro ao enviar mensagem');
});
