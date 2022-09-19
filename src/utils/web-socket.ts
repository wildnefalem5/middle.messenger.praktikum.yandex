import { store } from "./store/store";
import EventBus from "./event-bus";

export enum WebsocketEvents {
  OPEN = "open",
  MESSAGE = "message",
  CLOSE = "close",
  ERROR = "error",
}

export enum WebSocketMessages {
  PING = "ping",
  PONG = "pong",
  GET_OLD = "get old",
  MESSAGE = "message",
  FILE = "file",
}

export class WebSocketApi extends EventBus {
  static instance: WebSocketApi;

  private socket: WebSocket;

  private isOpen: boolean = false;

  private intervalId: ReturnType<typeof setInterval>;

  private readonly INTERVAL: number = 1000;

  constructor() {
    super();

    if (WebSocketApi.instance) {
      return WebSocketApi.instance;
    }

    WebSocketApi.instance = this;
  }

  public start(url: string) {
    if (this.isOpen) {
      clearInterval(this.intervalId);

      this.socket.close();
    }

    this.socket = new WebSocket(url);

    this.isOpen = true;

    this.socket.addEventListener("open", this._handleOpen);
    this.socket.addEventListener("close", this._handleClose);
    this.socket.addEventListener("error", this._handleError);
    this.socket.addEventListener("message", this._handleMessage);

    this.checkConnection();
  }

  public sendMessage(content: any, type: any) {
    this.socket.send(
      JSON.stringify({
        content,
        type,
      })
    );
  }

  private _handleOpen = () => {
    this.emit(WebsocketEvents.OPEN, "Соединение установлено");
  };

  private _handleMessage = (event: MessageEvent<any>) => {
    const message = JSON.parse(event.data);

    if (message.type === WebSocketMessages.MESSAGE) {
      const state = store.getState();
      const prevStateMessages = state.messages || [];
      const user = state.user;
      const preparedMessage = {
        ...message,
        is_my_message: user?.id === message.user_id,
      };

      store.setState("messages", [...prevStateMessages, preparedMessage]);

      this.emit(WebsocketEvents.MESSAGE, event.data);
    }
  };

  private _handleClose = (event: CloseEvent) => {
    if (event.wasClean) {
      this.emit(WebsocketEvents.CLOSE, "Соединение закрыто чисто");
    } else {
      this.emit(WebsocketEvents.CLOSE, "Обрыв соединения");
    }
    this.emit(
      WebsocketEvents.CLOSE,
      `Код: ${event.code} | Причина: ${event.reason}`
    );
  };

  private _handleError = () => {
    this.emit(WebsocketEvents.ERROR, "Ошибка соединения");
  };

  public checkConnection() {
    this.intervalId = setInterval(() => {
      this.sendMessage("", WebSocketMessages.PING);
    }, this.INTERVAL);
  }
}
