import { Inject, Injectable } from '@angular/core';
import { DefaultHeaders, GET, HttpService } from 'http-rest-decorator';
import { HttpClient } from '@angular/common/http';
import { BASE_API_URL } from './index';
import { Observable } from 'rxjs';
import { Resource } from '../models/resource';

@Injectable({
  providedIn: 'root'
})
@DefaultHeaders({
  Accept: 'application/json',
  'Content-Type': 'application/json'
})
export class ResourceAPI extends HttpService {

  constructor(
    private _http: HttpClient,
    @Inject(BASE_API_URL) private _baseApiUrl: string
  ) {
    super(_http, {
      Url: _baseApiUrl
    });
  }

  @GET('/resources')
  getAll(): Observable<Resource[]> {
    return null;
  }

}
