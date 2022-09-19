import { WebSocketApi, WebSocketMessages } from "../../utils/web-socket";
import { IRequestOptions } from "../../utils/http-transport/http-transport";
import { ChatApi } from "../chat-api";
import { RequestChatData, RequestChatUserData } from "../types";
import { store } from "../../utils/store/store";

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
    return this._api.create(options).then(() => {
      return this.loadMoreChat()
    })
  }

  loadMoreChat() {
    return this._api.loadMore().then((response) => {
      const chats = JSON.parse(response.response);

      store.setState("chats", chats);
    });
  }

  addUser(options: IRequestOptions<RequestChatUserData>) {
    return this._api.invite(options).then(() => {});
  }

  deleteUser(options: IRequestOptions<RequestChatUserData>) {
    return this._api.delete(options).then(() => {});
  }

  getUsersById(id: number) {
    return this._api.getMembersByChatId(id).then(() => {});
  }

  startMessages = (chatId: number) => {
    this._api.getToken(chatId).then((token) => {
      const user = store.getState().user;
      const socket = new WebSocketApi();
      const baseUrl = "wss://ya-praktikum.tech/ws/chats";

      const url = `${baseUrl}/${user?.id}/${chatId}/${token}`;

      socket.start(url);
    });
  };

  sendMessage(message: string) {
    const socket = new WebSocketApi();

    if (socket) {
      socket.sendMessage(message, WebSocketMessages.MESSAGE);
    }
  }
}

export const chatController = new ChatController();
