import { twitterSearchRequest, contactRequest } from '../store/services';
import { mockTwitterApiObject, mockContactApiObject } from '../__mocks__/';

describe('twitterSearchRequest', () => {
    fetch.mockResolvedValueOnce({ json: () => Promise.resolve(mockTwitterApiObject) });
    it('gets data', async () => {
        const result = await twitterSearchRequest({});
        expect(result).toStrictEqual(mockTwitterApiObject);
    });
});

describe('contactRequest', () => {
    fetch.mockResolvedValueOnce({ json: () => Promise.resolve(mockContactApiObject) });
    it('gets data', async () => {
        const result = await contactRequest({});
        expect(result).toStrictEqual(mockContactApiObject);
    });
});
