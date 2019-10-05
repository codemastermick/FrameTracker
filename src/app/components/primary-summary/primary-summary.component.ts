import { Component, OnInit, Input } from "@angular/core";
import { PrimaryWeaponsService } from "app/shared/primary-weapons.service";
import { LazyItem } from "app/shared/lazyItem.interface";

@Component({
  selector: "app-primary-summary",
  templateUrl: "./primary-summary.component.html",
  styleUrls: ["./primary-summary.component.scss"]
})
export class PrimarySummaryComponent implements OnInit {
  @Input() primary: LazyItem;
  @Input() even: boolean;
  @Input() odd: boolean;

  constructor(public weapons: PrimaryWeaponsService) { }

  ngOnInit() {
    try {
      this.primary = JSON.parse(this.primary.toString());
    } catch (e) {
      this.primary = this.primary;
    }
  }

  getThumb() {
    return this.weapons.getThumb(this.primary.wikiaThumbnail || this.primary.imageName);
  }

  getDPS() {
    // cannot reduce undefined - primary not being set correctly in test
    return this.primary.damagePerShot.reduce((a, b) => a + b, 0);
  }

}
