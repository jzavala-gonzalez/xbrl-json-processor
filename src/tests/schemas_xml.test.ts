import { expect, test, it, describe } from 'vitest';
import { mySchema } from '../schemas/xml';

describe('mySchema', () => {
    it('parses strings', () => {

        expect(mySchema.parse('hello')).toBe('hello');
    })
})