import { Injectable } from '@angular/core';
import Items, { Item } from 'warframe-items';
import { DomSanitizer, SafeStyle, SafeUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class RelicService {
  allRelics: Item[];

  constructor(private sanitization: DomSanitizer) {
    this.allRelics = new Items({ category: ['Relics'] });
  }

  private formatUrl(url: string): string {
    url = url.toLowerCase();
    url = url.replace('%20', ' ');
    url = url.replace(/\%20.*?/gm, ' ');
    url = url.replace(/\b(\w)/g, c => c.toUpperCase());
    return url;
  }

  public getImage(imageName: string): SafeUrl {
    return this.sanitization.bypassSecurityTrustUrl(`https://cdn.warframestat.us/img/${imageName}`);
  }

  public getThumb(imageName: string): SafeStyle {
    return this.sanitization.bypassSecurityTrustStyle(`url(https://cdn.warframestat.us/img/${imageName})`);
  }

  getAllRelics() {
    return this.allRelics;
  }

  getRelicByName(name: string) {
    name = this.formatUrl(name);
    console.log(`Retreiving data for ${name}`);
    return this.allRelics.find(x => x.name === name);
  }
}
