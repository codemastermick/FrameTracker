import { Injectable } from "@angular/core";
import Items, { Item } from "warframe-items";
import { DomSanitizer, SafeStyle, SafeUrl } from "@angular/platform-browser";
import { formatUrl } from "./urlHandler";

@Injectable({
  providedIn: "root"
})
export class RelicService {
  allRelics: Item[];

  constructor(private sanitization: DomSanitizer) {
    this.allRelics = new Items({ category: ["Relics"] });
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
    name = formatUrl(name);
    console.log(`Retreiving data for ${name}`);
    return this.allRelics.find(x => x.name === name);
  }

  getRelicsByType(type: string) {
    return this.allRelics.filter(x => {
      return x.name.includes(type, 0);
    });
  }

  getRelicsByLevel(level: string) {
    return this.allRelics.filter(x => {
      return x.name.includes(level, 0);
    });
  }
}
