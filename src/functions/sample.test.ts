import { sampleFunc } from './sample';

describe('sampleFunc', () => {
  test('10倍した数値が返されること', () => {
    const multiplicand = 10;
    const sut = sampleFunc(multiplicand);
    const expected = 100;
    expect(sut).toBe(expected);
  });
});
