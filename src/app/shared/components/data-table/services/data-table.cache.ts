import { Injectable } from "@angular/core";
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class DataTableCacheService {
  private cache = {};

  set(table, key, data){
    console.log("SET CACHE:::", this.cache)
    _.set(this.cache, [table, key], data);
  }

  get(table, key){
    console.log("GET CACHE:::", this.cache)
    return _.get(this.cache, [table, key]);
  }

  has(table, key){
    return _.has(this.cache, [table, key]);
  }

  clear(table){
    _.set(this.cache, table, null);
  }

}
