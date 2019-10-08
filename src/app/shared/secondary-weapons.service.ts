import { Injectable } from "@angular/core";
import Items, { Item, Type } from "warframe-items";
import { DomSanitizer, SafeStyle, SafeUrl } from "@angular/platform-browser";
import { formatUrl } from "./urlHandler";

@Injectable({
  providedIn: "root"
})
export class SecondaryWeaponsService {
  allSecondaries: Item[];

  constructor(private sanitization: DomSanitizer) {
    this.allSecondaries = new Items({ category: ["Secondary"] });
  }


  public getImage(imageName: string): SafeUrl {
    return this.sanitization.bypassSecurityTrustUrl(`https://cdn.warframestat.us/img/${imageName}`);
  }

  public getThumb(imageName: string): SafeStyle {
    return this.sanitization.bypassSecurityTrustStyle(`url(${imageName})`);
  }

  getAllSecondaries(): Item[] {
    return this.allSecondaries;
  }

  getSecondaryByName(name: string): Item {
    name = formatUrl(name);
    console.log(`Retreiving data for ${name}`);
    return this.allSecondaries.find(x => x.name === name);
  }

  getAllOfType(type: Type) {
    return this.allSecondaries.filter(x => x.type === type);
  }
}
