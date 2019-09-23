import { Injectable } from '@angular/core';
import Items, { Item, Polarity } from 'warframe-items';
import { DomSanitizer, SafeStyle, SafeUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class PrimaryWeaponsService {
  allPrimaries: Item[];
  constructor(private sanitization: DomSanitizer) {
    this.allPrimaries = this.getAllPrimaries();
  }

  private formatUrl(url: string): string {
    url = url.toLowerCase();
    url = url.replace('%20', ' ');
    url = url.replace(/\b(\w)/g, c => c.toUpperCase());
    return url;
  }

  getAllPrimaries(): Item[] {
    return new Items({ category: ['Primary'] });
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
    return this.sanitization.bypassSecurityTrustStyle(`url(${wikiaURL})`);
  }
}
