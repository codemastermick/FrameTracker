import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'warframe-items';
import { PrimaryWeaponsService } from 'app/shared/primary-weapons.service';

@Component({
  selector: 'app-primary-summary',
  templateUrl: './primary-summary.component.html',
  styleUrls: ['./primary-summary.component.scss']
})
export class PrimarySummaryComponent implements OnInit {
  @Input() primary: Item;

  constructor(public weapons: PrimaryWeaponsService) { }

  ngOnInit() {
    this.primary = JSON.parse(this.primary.toString());
  }

  getThumb() {
    return this.weapons.getThumb(this.primary.wikiaThumbnail || this.primary.imageName);
  }

  public openDetails() {
    // open overlay with detail view
  }

  getDPS() {
    return this.primary.damagePerShot.reduce((a, b) => a + b, 0);
  }

}