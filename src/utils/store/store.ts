import EventBus from "../event-bus";
import { set } from "../set";

export enum StoreEvents {
  UPDATED = "updated",
}

export interface Chat {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  last_message: {
    user: User;
    time: string;
    content: string;
  };
}

export interface User {
  login: string;
  email: string;
  first_name: string;
  second_name: string;
  display_name?: string;
  phone: string | number;
  avatar: string;
  id?: number;
}

interface Message {
  content: string;
  id: number;
  time: string;
  user_id: number;
}

interface State {
  user?: User;
  chats?: Chat[];
  messages?: Message[];
}

export class Store extends EventBus {
  static instance: Store;

  protected _state: State = {};

  constructor() {
    super();

    if (Store.instance) {
      return Store.instance;
    }

    Store.instance = this;
  }

  public getState(): State {
    return this._state;
  }

  public setState(path: string, value: unknown) {
    set(this._state, path, value);

    this.emit(StoreEvents.UPDATED);
  }

  public removeState() {
    this._state = {} as State;

    this.emit(StoreEvents.UPDATED);
  }
}

export const store = new Store();
