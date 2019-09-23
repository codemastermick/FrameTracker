import { Injectable } from '@angular/core';
import Items, { Item } from 'warframe-items';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class WfDataService {

  constructor(private sanitization: DomSanitizer) { }

  public getThumbnail(imageName: string): SafeStyle {
    return this.sanitization.bypassSecurityTrustStyle(`url(https://cdn.warframestat.us/img/${imageName})`);
  }

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
