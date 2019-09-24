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
    if (imageName === 'ceramic-dagger.png') {
      imageName = 'https://vignette.wikia.nocookie.net/warframe/images/6/64/SwordCeramic_d.png/revision/latest/scale-to-width-down/220?cb=20190306231452';
    }
    if (imageName === 'dark-split-sword.png') {
      imageName = 'https://vignette.wikia.nocookie.net/warframe/images/d/da/DarkSplitSwordDualIcon.png/revision/latest/scale-to-width-down/220?cb=20180407161508';
    }
    if (imageName === 'dual-ether.png') {
      imageName = 'https://vignette.wikia.nocookie.net/warframe/images/e/ee/Dual_Ether.png/revision/latest/scale-to-width-down/220?cb=20130412222314';
    }
    if (imageName === 'galatine.png') {
      imageName = 'https://vignette.wikia.nocookie.net/warframe/images/d/df/Galatine_o.png/revision/latest/scale-to-width-down/220?cb=20130928190402';
    }
    if (imageName === 'wolf-sledge.png') {
      imageName = 'https://vignette.wikia.nocookie.net/warframe/images/4/46/Wolf_Sledge_Image.png/revision/latest/scale-to-width-down/220?cb=20190426192305';
    }
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
