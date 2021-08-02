import { APIGatewayRequest } from "./eventGenerator";

test('API Gateway Response com body null', () => {
    const request = {
        body: null,
    };

    const response = APIGatewayRequest(request);

    expect(response.body).toBe(null);
});
