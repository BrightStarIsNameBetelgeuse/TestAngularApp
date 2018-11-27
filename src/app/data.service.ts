import { Injectable } from '@angular/core';
import { DATA } from './mock-data';
import {Test} from './Test';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData(): Test[] {
    return DATA;
  }
}
