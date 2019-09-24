import { Injectable } from '@angular/core';
import Items, { Item } from 'warframe-items';
import { DomSanitizer, SafeStyle, SafeUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MeleeService {
  allMelee: Item[];

  constructor(private sanitization: DomSanitizer) {
    this.allMelee = this.getAllMelees();
  }

  private formatUrl(url: string): string {
    url = url.toLowerCase();
    url = url.replace('%20', ' ');
    url = url.replace(/\b(\w)/g, c => c.toUpperCase());
    return url;
  }

  public getImage(imageName: string): SafeUrl {
    return this.sanitization.bypassSecurityTrustUrl(`https://cdn.warframestat.us/img/${imageName}`);
  }

  public getThumb(imageName: string): SafeStyle {
    return this.sanitization.bypassSecurityTrustStyle(`url(${imageName})`);
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
