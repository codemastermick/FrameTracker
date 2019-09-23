import { Injectable } from '@angular/core';
import Items, { Item } from 'warframe-items';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class WfDataService {
  allFrames: Item[];
  allPrimaries: Item[];
  allSecondaries: Item[];
  allMelee: Item[];

  constructor(private sanitization: DomSanitizer) {
    this.allFrames = this.getAllWarframes();
    this.allPrimaries = this.getAllPrimaries();
    this.allSecondaries = this.getAllSecondaries();
    this.allMelee = this.getAllMelees();
  }

  private formatUrl(url: string): string {
    url = url.toLowerCase();
    url = url.replace('%20', ' ');
    url = url.replace(/\b(\w)/g, c => c.toUpperCase());
    return url;
  }

  public getThumbnail(imageName: string): SafeStyle {
    return this.sanitization.bypassSecurityTrustStyle(`url(https://cdn.warframestat.us/img/${imageName})`);
  }

  getAllWarframes(): Item[] {
    return new Items({ category: ['Warframes'] });
  }

  getWarframeByName(name: string): Item {
    name = this.formatUrl(name);
    console.log(`Retreiving data for ${name}`);
    return this.allFrames.find(x => x.name === name);
  }

  getAllPrimaries(): Item[] {
    return new Items({ category: ['Primary'] });
  }

  getPrimaryByName(name: string): Item {
    name = this.formatUrl(name);
    console.log(`Retreiving data for ${name}`);
    return this.allPrimaries.find(x => x.name === name);
  }

  getAllSecondaries(): Item[] {
    return new Items({ category: ['Secondary'] });
  }

  getSecondaryByName(name: string): Item {
    name = this.formatUrl(name);
    console.log(`Retreiving data for ${name}`);
    return this.allSecondaries.find(x => x.name === name);
  }

  getAllMelees(): Item[] {
    return new Items({ category: ['Melee'] });
  }

  getMeleeByName(name: string): Item {
    name = this.formatUrl(name);
    console.log(`Retreiving data for ${name}`);
    return this.allMelee.find(x => x.name === name);
  }
}
