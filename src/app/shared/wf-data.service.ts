import { Injectable } from '@angular/core';
import Items, { Item, Polarity } from 'warframe-items';
import { DomSanitizer, SafeStyle, SafeUrl } from '@angular/platform-browser';



@Injectable({
  providedIn: 'root'
})
export class WfDataService {
  allFrames: Item[];
  allSecondaries: Item[];
  allMelee: Item[];

  constructor(private sanitization: DomSanitizer) {
    this.allFrames = this.getAllWarframes();
    this.allSecondaries = this.getAllSecondaries();
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
    if (imageName === 'equinox.png') {
      imageName = 'https://vignette.wikia.nocookie.net/warframe/images/c/c1/EquinoxIcon64.png/revision/latest';
    }
    if (imageName === 'equinox-prime.png') {
      imageName = 'https://vignette.wikia.nocookie.net/warframe/images/5/55/EquinoxPrimeIcon64.png/revision/latest';
    }
    if (imageName === 'wukong-prime.png') {
      imageName = 'https://vignette.wikia.nocookie.net/warframe/images/c/cb/WukongPrimeIcon64.png/revision/latest';
    }
    if (imageName === 'https://vignette.wikia.nocookie.net/warframe/images/f/f2/ChromaPrime.png/revision/latest?cb=20180925193634') {
      imageName = 'https://vignette.wikia.nocookie.net/warframe/images/f/fa/ChromaPrimeIcon64.png/revision/latest?cb=20180925195210';
    }
    return this.sanitization.bypassSecurityTrustStyle(`url(${imageName})`);
  }

  getAllWarframes(): Item[] {
    return new Items({ category: ['Warframes'] });
  }

  getWarframeByName(name: string): Item {
    name = this.formatUrl(name);
    console.log(`Retreiving data for ${name}`);
    return this.allFrames.find(x => x.name === name);
  }

  getFramePassive(frame: Item) {
    return frame.passiveDescription.replace(/\|\b.*?\|%/gm, '');
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
