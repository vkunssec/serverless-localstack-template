import 'regenerator-runtime/runtime'

import { handler } from "../../src/lambda/hello";
import { APIGatewayRequest } from "../util/eventGenerator";
import { isApiGatewayResponse } from "../util/validator";

describe('Resposta de Boas Vindas ao Template', () => {
    test('Deve retornar uma resposta seguindo o padrao API Gateway', async () => {
        const event = APIGatewayRequest({
            body: {
                message: 'Include a message in the body parameters',
            },
        });

        const response = await handler(event);

        expect(response).toBeDefined();
        expect(isApiGatewayResponse(response)).toBe(true);
    });
});
