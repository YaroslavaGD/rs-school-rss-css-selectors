export enum EventType {
  CHANGE_LEVEL = 'changeLevel',
}

export const eventEmitter: {
  readonly events: Record<string, (() => void)[]>;
  emit(eventType: EventType): void;
  subscribe(eventType: EventType, callback: () => void): void;
  unsubscribe(eventType: EventType): void;
} = {
  events: {},

  emit(eventName) {
    if (!this.events[eventName]) return;
    this.events[eventName].forEach((callback: () => void) => callback());
  },

  subscribe(eventName, callback) {
    if (!this.events[eventName]) this.events[eventName] = [];
    this.events[eventName]?.push(callback); // подписать всех
  },

  unsubscribe(eventName) {
    if (!this.events[eventName]) return;
    delete this.events[eventName];
  },
};
