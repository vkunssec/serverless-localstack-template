import { handler } from "../../src/lambda/receive";

describe('Recebendo mensagem SQS', () => {
    test('resposta sucesso de recebimento', async () => {
        const response = await handler();

        expect(response).toBeDefined();

        expect(response.statusCode).toBe(200);
        expect(typeof response.body).toBe('string');
    });

    test.todo('erro ao receber mensagem');
});
