import { Injectable } from '@angular/core';
import Items, { Item } from 'warframe-items';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private sanitization: DomSanitizer) { }

  public getThumbnail(imageName: string): SafeStyle {
    return this.sanitization.bypassSecurityTrustStyle(`url(https://cdn.warframestat.us/img/${imageName})`);
  }
}
