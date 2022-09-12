import { IRequestOptions } from "../utils/http-transport";
import { RequestChatData, RequestChatUserData } from "./types";
import { Api } from "./api";

export class ChatApi extends Api {
  public create(options: IRequestOptions<RequestChatData>) {
    return this._http.post("/chats", {
      ...options,
      headers: this._jsonHeaders,
    });
  }

  public loadMore(limit: number = 20) {
    const limitParam = `limit=${limit}`;

    return this._http.get(`/chats/?${limitParam}`, {});
  }

  public invite(options: IRequestOptions<RequestChatUserData>) {
    return this._http.put("/chats/users", {
      ...options,
      headers: this._jsonHeaders,
    });
  }

  public delete(options: IRequestOptions<RequestChatUserData>) {
    return this._http.delete("/chats/users", options);
  }

  public getMembersByChatId(id: number) {
    return this._http.get(`/chats/${id}/users`, {});
  }

  public getToken(id: number) {
    return this._http.post(`/chats/token/${id}`);
  }
}
