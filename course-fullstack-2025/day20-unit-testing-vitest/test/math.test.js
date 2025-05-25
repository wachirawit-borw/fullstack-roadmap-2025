import { describe, it, expect } from 'vitest';
import { add, subtract } from '../src/math.js';

describe('math.js', () => {
  it('adds numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('subtracts numbers correctly', () => {
    expect(subtract(10, 4)).toBe(6);
  });
});
