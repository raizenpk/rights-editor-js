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

  constructor(private store: Store<fromResource.State>) {
    this.loadResources();
  }

  loadResources() {
    this.store.dispatch(ResourceActions.loadResources());
  }

  getAllAsDictionary(): Observable<Dictionary<Resource>> {
    return this.store.select(ResourceSelectors.selectEntities);
  }

}
