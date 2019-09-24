import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'warframe-items';
import { SecondaryWeaponsService } from 'app/shared/secondary-weapons.service';

@Component({
  selector: 'app-secondary-summary',
  templateUrl: './secondary-summary.component.html',
  styleUrls: ['./secondary-summary.component.scss']
})
export class SecondarySummaryComponent implements OnInit {
  @Input() secondary: Item;

  constructor(private weapons: SecondaryWeaponsService) { }

  ngOnInit() {
    this.secondary = JSON.parse(this.secondary.toString());
  }

  getThumb() {
    return this.weapons.getThumb(this.secondary.wikiaThumbnail || this.secondary.imageName);
  }

  getDPS() {
    return this.secondary.damagePerShot.reduce((a, b) => a + b, 0);
  }

}
