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
    public http: HttpClient,
    @Inject(BASE_API_URL) public baseApiUrl: string
  ) {
    super(http, {
      Url: baseApiUrl
    });
  }

  @GET('/resources')
  getAll(): Observable<Resource[]> {
    return null;
  }

}
