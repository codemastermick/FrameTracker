import { Injectable } from '@angular/core';
import Items, { Item, Type } from 'warframe-items';
import { DomSanitizer, SafeStyle, SafeUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class PrimaryWeaponsService {
  allPrimaries: Item[];
  constructor(private sanitization: DomSanitizer) {
    this.allPrimaries = new Items({ category: ['Primary'] });
  }

  private formatUrl(url: string): string {
    url = url.toLowerCase();
    url = url.replace('%20', ' ');
    url = url.replace(/\b(\w)/g, c => c.toUpperCase());
    return url;
  }

  getAllPrimaries(): Item[] {
    return this.allPrimaries;
  }

  getPrimaryByName(name: string): Item {
    name = this.formatUrl(name);
    console.log(`Retreiving data for ${name}`);
    return this.allPrimaries.find(x => x.name === name);
  }

  public getImage(imageName: string): SafeUrl {
    return this.sanitization.bypassSecurityTrustUrl(`https://cdn.warframestat.us/img/${imageName}`);
  }

  public getThumb(wikiaURL: string): SafeStyle {
    if (wikiaURL === 'miter.png') {
      wikiaURL = 'https://raw.githubusercontent.com/wfcd/warframe-items/development/data/img/miter.png';
    }
    if (wikiaURL === 'sybaris-prime.png') {
      wikiaURL = 'https://raw.githubusercontent.com/wfcd/warframe-items/development/data/img/sybaris-prime.png';
    }
    return this.sanitization.bypassSecurityTrustStyle(`url(${wikiaURL})`);
  }

  getAllOfType(type: Type) {
    return this.allPrimaries.filter(x => x.type === type);
  }
}
