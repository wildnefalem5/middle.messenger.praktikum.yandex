import { Api } from "./api";
import { IRequestOptions } from "../utils/http-transport";

export class ChatApi extends Api {
  constructor() {
    super("/chats");
  }

  public create(options: IRequestOptions) {
    return this._http.post(this._baseUrl, options);
  }

  public loadMore(options: IRequestOptions) {
    return this._http.get(this._getUrl("/?limit=20"), options);
  }

  public invite(options: IRequestOptions) {
    return this._http.put(this._getUrl("/users"), options);
  }

  public getMembers(id: number, options: IRequestOptions) {
    return this._http.get(this._getUrl(`/${id}/users`), options);
  }

  public getToken(id: number, options: IRequestOptions) {
    return this._http.post(this._getUrl(`/token/${id}`), options);
  }

  public updateAvatar(options: IRequestOptions) {
    return this._http.put(this._getUrl("/avatar"), options);
  }
}
