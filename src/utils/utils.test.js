import { formatTime } from './formatTime';
import { promoPrice } from './promoPrice';
import { formatPrice } from './formatPrice';

describe('utils', () => {
  describe('formatTime', () => {

    it('should return null if there is no arg', () => {
      expect(formatTime()).toBe(null);
    });

    it('should return null if arg is not a number', () => {
      expect(formatTime('abc')).toBe(null);
      expect(formatTime(() => {})).toBe(null);
    });

    it('should return null if arg is lower than zero', () => {
      expect(formatTime(-1)).toBe(null);
      expect(formatTime(-2)).toBe(null);
    });

    it('should return time in hh:mm:ss if arg is proper', () => {
      expect(formatTime(122)).toBe('00:02:02');
      expect(formatTime(3793)).toBe('01:03:13');
      expect(formatTime(120)).toBe('00:02:00');
      expect(formatTime(3604)).toBe('01:00:04');
    });

  });

  describe('promoPrice', () => {
    it('should return correct price if arg is proper', () => {
      expect(promoPrice(50, 20)).toBe(40);
    });
  });
  describe('formatPrice', () => {
    it('should return correct price format', () => {
      expect(formatPrice(12345.67)).toBe('$12,346');
    });

    it('should return unchanged argument which is not a number', () => {
      expect(formatPrice('string')).toBe('string');
    });
  });
});