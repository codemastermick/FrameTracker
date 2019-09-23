import { Injectable } from '@angular/core';
import Items, { Item } from 'warframe-items';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class WfDataService {
  allFrames: Item[];


  constructor(private sanitization: DomSanitizer) {
    this.allFrames = this.getAllWarframes();
  }

  public getThumbnail(imageName: string): SafeStyle {
    return this.sanitization.bypassSecurityTrustStyle(`url(https://cdn.warframestat.us/img/${imageName})`);
  }

  getAllWarframes(): Item[] {
    return new Items({ category: ['Warframes'] });
  }

  getWarframeByName(name: string): Item {
    console.log(`Retreiving data for ${name}`);
    return this.allFrames.find(x => x.name === name);
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
