import { isApiGatewayResponse, isCorrectHeaders } from "./validator";

test('API Gateway Response deve contem body, headers e statusCode', () => {
    const event = {
        body: JSON.stringify({
            message: 'unit test',
        }),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Origin': '*',
        },
        statusCode: 400,
    };

    expect(isApiGatewayResponse(event)).toBe(true);
});

describe('API Gateway Response erros', () => {
    test('falta de algum parametro', () => {
        const event = {
            body: { value: 42 },
            statusCode: 400,
        };
        expect(isApiGatewayResponse(event)).toBe(false);
    });
    test('body invalido', () => {
        const event = {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Origin': '*',
            },
            body: { value: 42 },
            statusCode: 400,
        };
        expect(isApiGatewayResponse(event)).toBe(false);
    });
    test('headers invalidos', () => {
        const event = {
            headers: {
                'Content-Type': 'text/html',
            },
            body: JSON.stringify({
                message: 'unit test',
            }),
            statusCode: 400,
        };
        expect(isApiGatewayResponse(event)).toBe(false);
    });
    test('status code invalido', () => {
        const event = {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                message: 'unit test',
            }),
            statusCode: { status: 418 },
        };
        expect(isApiGatewayResponse(event)).toBe(false);
    });
});

test('valores que devem estar contidos no header', () => {
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Origin': '*',
    };

    expect(isCorrectHeaders(headers)).toBe(true);
});

describe('Headers erros', () => {
    test('content type invalido', () => {
        const headers = {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Origin': '*',
        };
    
        expect(isCorrectHeaders(headers)).toBe(false);
    });
    test('origin invalido', () => {
        const headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Origin': 'http://localhost',
        };
    
        expect(isCorrectHeaders(headers)).toBe(false);
    });
    test('metodo invalido', () => {
        const headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': 'get',
            'Access-Control-Allow-Origin': '*',
        };
    
        expect(isCorrectHeaders(headers)).toBe(false);
    });
});
