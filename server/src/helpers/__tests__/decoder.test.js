import Decoder from '../decoder';

describe('Decoder main function', () => {
  test('it should decode the messages', () => {
    // Mock
    const instance = new Decoder();
    const hello = instance.transformMessage('216 3645 12 324 405');
    const fooBar = instance.transformMessage('6 15 15 28 2 1 18');
    const maze = instance.transformMessage('13 27 26 5');
    const trussle_tech = instance.transformMessage('20 486 21 513 19 324 5 21924 540 135 3 8');
    const hello_world = instance.transformMessage('8 5 324 8748 295245 730 23 405 13122 12 108');
    // Assest
    expect(hello).toBe('hello');
    expect(fooBar).toBe('foo bar');
    expect(maze).toBe('maze');
    expect(trussle_tech).toBe('trussle tech');
    expect(hello_world).toBe('hello world');
  });
  test('it should check for valid inputs', () => {
    // Mock
    const instance = new Decoder();
    const invalidLetters = instance.transformMessage('this should not pass');
    const invalidSymbols = instance.transformMessage('@@@! random 1110');
    // Assest
    expect(invalidLetters).toBe('Not a valid input');
    expect(invalidSymbols).toBe('Not a valid input');
  });
});