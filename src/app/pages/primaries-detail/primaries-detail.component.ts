import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { DamageTypes } from "warframe-items";
import { Router } from "@angular/router";
import { PrimaryWeaponsService } from "../../shared/primary-weapons.service";
import { TagService } from "app/shared/tag-service.service";
import { LazyItem } from "app/shared/lazyItem.interface";

@Component({
  selector: "app-primaries-detail",
  templateUrl: "./primaries-detail.component.html",
  styleUrls: ["./primaries-detail.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrimariesDetailComponent implements OnInit {
  primary: LazyItem;

  constructor(
    private tagger: TagService,
    private router: Router,
    private weapons: PrimaryWeaponsService) { }

  ngOnInit() {
    this.primary = this.weapons.getPrimaryByName(this.router.url.split("/")[2]);

    this.tagger.setTitle(`Details for ${this.primary.name}`);
    this.tagger.setDescription(`Primary weapon details for ${this.primary.name}`);

  }

  getImage(imageName: string) {
    return this.weapons.getImage(imageName);
  }

  getThumb() {
    return this.weapons.getThumb(this.primary.wikiaThumbnail);
  }

  getDamageTypes(weapon: LazyItem): DamageTypes[] {
    return new Array(weapon.damageTypes);
  }

}
