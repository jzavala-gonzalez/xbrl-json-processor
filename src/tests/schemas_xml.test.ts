import { expect, test } from 'vitest';
import { mySchema } from '../schemas/xml';

test('mySchema parses the string', () => {
    expect(mySchema.parse('hello')).toBe('hello');
})