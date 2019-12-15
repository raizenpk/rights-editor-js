import { Inject, Injectable } from '@angular/core';
import { DefaultHeaders, GET, HttpService } from 'http-rest-decorator';
import { HttpClient } from '@angular/common/http';
import { BASE_API_URL } from './index';
import { Observable } from 'rxjs';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
@DefaultHeaders({
  Accept: 'application/json',
  'Content-Type': 'application/json'
})
export class RoleAPI extends HttpService {

  constructor(
    private _http: HttpClient,
    @Inject(BASE_API_URL) private _baseApiUrl: string
  ) {
    super(_http, {
      Url: _baseApiUrl
    });
  }

  @GET('/roles')
  getAll(): Observable<Role[]> {
    return null;
  }

}
