import { Logger } from '../ports/Logger';
import { singletonFactory } from '@experiments/web-singleton';

export class ConsoleLogger implements Logger {
  log(message: string) {
    console.log(message);
  }
}

export const loggerSingleton = singletonFactory({ factory: () => new ConsoleLogger() });
