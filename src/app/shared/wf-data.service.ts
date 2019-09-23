import { Injectable } from '@angular/core';
import Items, { Item } from 'warframe-items';

@Injectable({
  providedIn: 'root'
})
export class WfDataService {

  constructor() { }

  getAllWarframes(): Item[] {
    return new Items({ category: ['Warframes'] });
  }

  getAllPrimaries(): Item[] {
    return new Items({ category: ['Primary'] });
  }

  getAllSecondaries(): Item[] {
    return new Items({ category: ['Secondary'] });
  }

  getAllMelees(): Item[] {
    return new Items({ category: ['Melee'] });
  }
}
