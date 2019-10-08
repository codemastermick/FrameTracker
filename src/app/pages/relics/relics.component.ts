import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Item } from "warframe-items";
import { RelicService } from "app/shared/relic.service";
import { TagService } from "app/shared/tag-service.service";

@Component({
  selector: "app-relics",
  templateUrl: "./relics.component.html",
  styleUrls: ["./relics.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RelicsComponent implements OnInit {

  allRelics: Item[];

  constructor(private tagger: TagService, private relic: RelicService) { }

  ngOnInit() {
    this.tagger.setTitle("The Tenno Sanctuary: Relics");
    this.tagger.setDescription("Warframe relics");

    this.allRelics = this.relic.getAllRelics();
  }

  getThumb(imageName: string) {
    return this.relic.getThumb(imageName);
  }

  resetFilters() {
    this.allRelics = this.relic.getAllRelics();
    this.allRelics.sort((a, b) => (a.name > b.name) ? 1 : -1);
  }

  filterOn(type: string) {
    this.allRelics = this.relic.getRelicsBy(type);
  }

  sortByIntact() {
    this.allRelics = this.relic.getRelicsBy("Intact");
  }

  sortByExceptional() {
    this.allRelics = this.relic.getRelicsBy("Exceptional");
  }

  sortByFlawless() {
    this.allRelics = this.relic.getRelicsBy("Flawless");
  }

  sortByRadiant() {
    this.allRelics = this.relic.getRelicsBy("Radiant");
  }
}
