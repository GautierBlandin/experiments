export function singletonFactory<T>(config: InjectableFactoryConfig<T>) {
  let overriden: T | undefined;
  let instance: T | undefined;

  const get = () => {
    if (overriden !== undefined) {
      return overriden;
    }

    if (instance !== undefined) {
      return instance;
    }

    instance = config.factory();
    return instance;
  };

  const reset = () => {
    overriden = undefined;
  };

  const override = (_instance: T) => {
    if (overriden !== undefined) {
      throw new Error('Cannot re-override singleton');
    }
    overriden = _instance;
  };

  return {
    get,
    reset,
    override,
  };
}

interface InjectableFactoryConfig<T> {
  factory: () => T;
}
