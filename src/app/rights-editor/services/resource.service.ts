import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromResource from '../store/reducers/resource.reducer';
import * as ResourceActions from '../store/actions/resource.actions';
import { Observable } from 'rxjs';
import * as ResourceSelectors from '../store/selectors/resource.selectors';
import { Resource } from '../models/resource';
import { Dictionary } from '@ngrx/entity';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private _store: Store<fromResource.State>) {
    this.loadResources();
  }

  loadResources() {
    this._store.dispatch(ResourceActions.loadResources());
  }

  getAllAsDictionary(): Observable<Dictionary<Resource>> {
    return this._store.select(ResourceSelectors.selectEntities);
  }

}
