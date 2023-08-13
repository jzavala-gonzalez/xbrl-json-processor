import { expect, test, it, describe } from 'vitest';
import { mySchema, NCName, QName } from '../schemas/xml';

describe('xml schema', () => {

    describe('NCName', () => {
        it('parses strings', () => {
            expect(NCName.parse('hello')).toBe('hello');
        })
        it('throws when colonized (:)', () => {
            expect(() => NCName.parse('something:withcolon')).toThrowError();
        })
        it('throws when starts with number', () => {
            expect(() => NCName.parse('3somethingstartswithnumber')).toThrowError();
        })
    })

    describe('QName', () => {
        it('parses strings', () => {
            expect(QName.parse('hello')).toBe('hello');
        })
        it('throws when colons (:) are weird', () => {
            // some examples maybe too many
            expect(() => QName.parse('ab:')).toThrowError();
            expect(() => QName.parse(':cd')).toThrowError();
            expect(() => QName.parse(':')).toThrowError();
            expect(() => QName.parse('ab::cd')).toThrowError();
        })
    })
})