import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Item, DamageTypes } from "warframe-items";
import { Router } from "@angular/router";
import { SecondaryWeaponsService } from "app/shared/secondary-weapons.service";
import { TagService } from "app/shared/tag-service.service";

@Component({
  selector: "app-secondaries-detail",
  templateUrl: "./secondaries-detail.component.html",
  styleUrls: ["./secondaries-detail.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondariesDetailComponent implements OnInit {
  secondary: Item;

  constructor(
    private tagger: TagService,
    private router: Router,
    private weapons: SecondaryWeaponsService) { }

  ngOnInit() {
    this.secondary = this.weapons.getSecondaryByName(this.router.url.split("/")[2]);

    this.tagger.setTitle(`Details for ${this.secondary.name}`);
    this.tagger.setDescription(`Secondary weapon details for ${this.secondary.name}`);

  }

  getImage(imageName: string) {
    return this.weapons.getImage(imageName);
  }

  getThumb() {
    return this.weapons.getThumb(this.secondary.wikiaThumbnail);
  }

  getDamageTypes(weapon: Item): DamageTypes[] {
    return new Array(weapon.damageTypes);
  }

}
