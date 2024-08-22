import { describe, it, expect } from 'vitest';
import { singletonFactory } from './singleton-factory';

describe('injectableFactory', () => {
  it('should return the factory result when getInstance is called', () => {
    const factory = singletonFactory({ factory: () => 'test value' });

    expect(factory.get()).toBe('test value');
  });

  it('should return the override value when setOverride is called', () => {
    const factory = singletonFactory({ factory: () => 'original value' });

    factory.override('override value');

    expect(factory.get()).toBe('override value');
  });

  it('should return to the original factory value after reset is called', () => {
    const factory = singletonFactory({ factory: () => 'original value' });

    factory.override('override value');
    factory.reset();

    expect(factory.get()).toBe('original value');
  });

  it("shouldn't allow overriding twice", () => {
    const factory = singletonFactory({ factory: () => 'original value' });

    factory.override('override value');
    expect(() => factory.override('override value')).toThrow();
  });
});
