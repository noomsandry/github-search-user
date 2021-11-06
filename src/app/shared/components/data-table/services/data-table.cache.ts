import { Injectable } from "@angular/core";
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class DataTableCacheService {
  private cache = {};

  set(table, key, data){
    _.set(this.cache, [table, key], data);
  }

  get(table, key){
    return _.get(this.cache, [table, key]);
  }

  has(table, key){
    return _.has(this.cache, [table, key]);
  }

  clear(table){
    _.set(this.cache, table, null);
  }

}
