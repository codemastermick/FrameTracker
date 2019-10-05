import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
import { Item, DamageTypes } from "warframe-items";
import { Router } from "@angular/router";
import { PrimaryWeaponsService } from "../../shared/primary-weapons.service";

@Component({
  selector: "app-primaries-detail",
  templateUrl: "./primaries-detail.component.html",
  styleUrls: ["./primaries-detail.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrimariesDetailComponent implements OnInit {
  primary: Item;

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private router: Router,
    private weapons: PrimaryWeaponsService) { }

  ngOnInit() {
    this.primary = this.weapons.getPrimaryByName(this.router.url.split("/")[2]);

    this.titleService.setTitle(`Details for ${this.primary.name}`);
    this.metaTagService.updateTag({ name: "description", content: `Primary weapon details for ${this.primary.name}` });
    this.metaTagService.updateTag({ name: "author", content: "Codemaster Mick" });
    this.metaTagService.updateTag({ name: "robots", content: "index, follow" });

  }

  getImage(imageName: string) {
    return this.weapons.getImage(imageName);
  }

  getThumb() {
    return this.weapons.getThumb(this.primary.wikiaThumbnail);
  }

  getDamageTypes(weapon: Item): DamageTypes[] {
    return new Array(weapon.damageTypes);
  }

}
