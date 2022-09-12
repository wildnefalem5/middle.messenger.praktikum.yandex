import { WebSocketApi, WebSocketMessages } from "../../utils/web-socket";
import { IRequestOptions } from "../../utils/http-transport";
import { ChatApi } from "../chat-api";
import { RequestChatData, RequestChatUserData } from "../types";

class ChatController {
  static __instance: ChatController;
  private _api: ChatApi;

  constructor() {
    if (ChatController.__instance) {
      return ChatController.__instance;
    }

    this._api = new ChatApi();

    ChatController.__instance = this;
  }

  createChat(options: IRequestOptions<RequestChatData>) {
    return this._api.create(options).then((response) => {
      console.log(response, "chat-controller, create chat");

      // this._store.setState("user", user);
    });
  }

  loadMoreChat() {
    return this._api.loadMore().then((response) => {
      console.log(response, "chat-controller, load more chat");

      // this._store.setState("user", user);
    });
  }

  addUser(options: IRequestOptions<RequestChatUserData>) {
    return this._api.invite(options).then((response) => {
      console.log(response, "chat-controller, invite user");

      // this._store.setState("user", user);
    });
  }

  deleteUser(options: IRequestOptions<RequestChatUserData>) {
    return this._api.delete(options).then((response) => {
      console.log(response, "chat-controller, delete user");

      // this._store.setState("user", user);
    });
  }

  getUsersById(id: number) {
    return this._api.getMembersByChatId(id).then((response) => {
      console.log(response, "chat-controller, get chat members");

      //this._api.getMembersByChatId(id)
    });
  }

  sendMessage(message: string) {
    const socket = new WebSocketApi();

    console.log(message, "chat-controller, send message");

    if (socket) {
      socket.sendMessage(message, WebSocketMessages.MESSAGE);
    }
  }
}

export const chatController = new ChatController();
