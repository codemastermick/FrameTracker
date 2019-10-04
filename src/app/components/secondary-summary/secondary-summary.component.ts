import { Component, OnInit, Input } from '@angular/core';
import { SecondaryWeaponsService } from 'app/shared/secondary-weapons.service';
import { LazyItem } from 'app/shared/lazyItem.interface';

@Component({
  selector: 'app-secondary-summary',
  templateUrl: './secondary-summary.component.html',
  styleUrls: ['./secondary-summary.component.scss']
})
export class SecondarySummaryComponent implements OnInit {
  @Input() secondary: LazyItem;
  @Input() even: boolean;
  @Input() odd: boolean;

  constructor(public weapons: SecondaryWeaponsService) { }

  ngOnInit() {
    try {
      this.secondary = JSON.parse(this.secondary.toString());
    } catch (e) {
      this.secondary = this.secondary;
    }
  }

  getThumb() {
    return this.weapons.getThumb(this.secondary.wikiaThumbnail || this.secondary.imageName);
  }

  getDPS() {
    return this.secondary.damagePerShot.reduce((a, b) => a + b, 0);
  }

}
