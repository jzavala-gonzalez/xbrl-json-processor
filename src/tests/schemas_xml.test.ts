import { expect, test, it, describe } from 'vitest';
import { mySchema, NCName } from '../schemas/xml';

describe('xml schema', () => {

    describe('NCName', () => {
        it('parses strings', () => {
            expect(NCName.parse('hello')).toBe('hello');
        })
        it('throws when colonized (:)', () => {
            expect(() => NCName.parse('something:withcolon')).toThrowError();
        })
    })
})