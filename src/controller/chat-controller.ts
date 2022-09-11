import { WebSocketApi, WebSocketMessages } from "./../utils/web-socket";
import { IRequestOptions } from "./../utils/http-transport";
import { ChatApi } from "./../api/chat-api";

export class ChatController {
  private _api: ChatApi;

  constructor() {
    this._api = new ChatApi();
  }

  createChat(options: IRequestOptions) {
    return this._api
      .create(options)
      .then((response) => {
        console.log(response, "chat-controller, create chat");

        // this._store.setState("user", user);
      })
      .catch(() => {
        console.log("some error in chat-controller, createChat");
      });
  }

  loadMoreChat() {
    return this._api
      .loadMore()
      .then((response) => {
        console.log(response, "chat-controller, load more chat");

        // this._store.setState("user", user);
      })
      .catch(() => {
        console.log("some error in chat-controller, loadMoreChat");
      });
  }

  addUser(options: IRequestOptions) {
    return this._api
      .invite(options)
      .then((response) => {
        console.log(response, "chat-controller, invite user");

        // this._store.setState("user", user);
      })
      .catch(() => {
        console.log("some error in chat-controller, addUser");
      });
  }

  getUsersById(id: number) {
    return this._api
      .getMembersByChatId(id)
      .then((response) => {
        console.log(response, "chat-controller, get chat members");

        //this._api.getMembersByChatId(id)
      })
      .catch(() => {
        console.log("some error in chat-controller, getUsersById");
      });
  }

  updateAvatar(options: IRequestOptions) {
    return this._api
      .updateAvatar(options)
      .then((response) => {
        console.log(response, "chat-controller, update chat image");

        //this._api.getMembersByChatId(id)
      })
      .catch(() => {
        console.log("some error in chat-controller, updateAvatar");
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
