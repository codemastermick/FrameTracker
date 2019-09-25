import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'warframe-items';
import { MeleeService } from 'app/shared/melee.service';

@Component({
  selector: 'app-melee-summary',
  templateUrl: './melee-summary.component.html',
  styleUrls: ['./melee-summary.component.scss']
})
export class MeleeSummaryComponent implements OnInit {
  @Input() melee: Item;

  constructor(public weapons: MeleeService) { }

  ngOnInit() {
    this.melee = null;

    try {
      this.melee = JSON.parse(this.melee.toString());
    } catch (e) {
      this.melee = this.melee;
    }
  }

  getThumb() {
    return this.weapons.getThumb(this.melee.wikiaThumbnail || this.melee.imageName);
  }

  getDPS() {
    return this.melee.damagePerShot.reduce((a, b) => a + b, 0);
  }

}
