import { Logger } from './Logger';

export class FakeLogger implements Logger {
  private messages: string[] = [];

  public log(message: string) {
    this.messages.push(message);
  }

  public getLogs() {
    return this.messages;
  }
}
