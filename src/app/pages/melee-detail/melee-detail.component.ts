import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Item, DamageTypes } from "warframe-items";
import { Router } from "@angular/router";
import { MeleeService } from "app/shared/melee.service";
import { TagService } from "app/shared/tag-service.service";

@Component({
  selector: "app-melee-detail",
  templateUrl: "./melee-detail.component.html",
  styleUrls: ["./melee-detail.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MeleeDetailComponent implements OnInit {
  melee: Item;

  constructor(
    private tagger: TagService,
    private router: Router,
    private weapons: MeleeService) { }

  ngOnInit() {
    this.melee = this.weapons.getMeleeByName(this.router.url.split("/")[2]);

    this.tagger.setTitle(`Details for ${this.melee.name}`);
    this.tagger.setDescription(`Primary weapon details for ${this.melee.name}`);

  }

  getImage(imageName: string) {
    return this.weapons.getImage(imageName);
  }

  getThumb() {
    return this.weapons.getThumb(this.melee.wikiaThumbnail);
  }

  getDamageTypes(weapon: Item): DamageTypes[] {
    return new Array(weapon.damageTypes);
  }

}
