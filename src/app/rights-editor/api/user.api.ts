import { Inject, Injectable } from '@angular/core';
import { DefaultHeaders, GET, HttpService } from 'http-rest-decorator';
import { HttpClient } from '@angular/common/http';
import { BASE_API_URL } from './index';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
@DefaultHeaders({
  Accept: 'application/json',
  'Content-Type': 'application/json'
})
export class UserAPI extends HttpService {

  constructor(
    private _http: HttpClient,
    @Inject(BASE_API_URL) private _baseApiUrl: string
  ) {
    super(_http, {
      Url: _baseApiUrl
    });
  }

  @GET('/users')
  getAll(): Observable<User[]> {
    return null;
  }

  patchUser(userId, userPartial: {}): Observable<User> {
    return this._http.patch<User>(
      this._baseApiUrl + '/users/' + userId,
      userPartial
    );
  }

}
