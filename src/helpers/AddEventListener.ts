export class AddEventListener {
  private readonly map: any = {};

  constructor() {
    this.map = {};
    this.addEventListener = this.addEventListener.bind(this);
    this.trigger = this.trigger.bind(this);
    this.removeEventListener = this.removeEventListener.bind(this);
    this.isRegistered = this.isRegistered.bind(this);
  }

  public removeEventListener(key: string): void {
    this.map[key] = undefined;
  }

  public addEventListener(key: string, handler: (...args: any[]) => any): void {
    this.map[key] = handler;
  }

  public trigger<T>(key: string, ...args: any[]): T {
    if (this.isRegistered(key)) {
      return this.map[key](...args);
    }
    throw new Error(`${key} is not registered`);
  }

  public isRegistered(key: string): boolean {
    return this.map[key] !== undefined;
  }
}
