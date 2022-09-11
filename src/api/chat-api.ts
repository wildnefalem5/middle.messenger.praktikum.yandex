import { Api } from "./api";
import { IRequestOptions } from "../utils/http-transport";

export class ChatApi extends Api {
  constructor() {
    super();
  }

  public create(options: IRequestOptions) {
    return this._http.post(this._baseUrl, {
      ...options,
      headers: this._jsonHeaders,
    });
  }

  public loadMore() {
    return this._http.get(this._getUrl("/chats/?limit=20"), {});
  }

  public invite(options: IRequestOptions) {
    return this._http.put(this._getUrl("/chats/users"), {
      ...options,
      headers: this._jsonHeaders,
    });
  }

  public getMembersByChatId(id: number) {
    return this._http.get(this._getUrl(`/chats/${id}/users`), {});
  }

  public getToken(id: number, options: IRequestOptions) {
    return this._http.post(this._getUrl(`/chats/token/${id}`), {
      ...options,
      headers: this._jsonHeaders,
    });
  }

  public updateAvatar(options: IRequestOptions) {
    return this._http.put(this._getUrl("/chats/avatar"), {
      ...options,
      headers: this._jsonHeaders,
    });
  }
}
