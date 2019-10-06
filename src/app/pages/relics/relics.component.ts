import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
import { Item } from "warframe-items";
import { RelicService } from "app/shared/relic.service";

@Component({
  selector: "app-relics",
  templateUrl: "./relics.component.html",
  styleUrls: ["./relics.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RelicsComponent implements OnInit {

  allRelics: Item[];

  constructor(private titleService: Title, private metaTagService: Meta, private relic: RelicService) { }

  ngOnInit() {
    this.titleService.setTitle("The Tenno Sanctuary: Relics");
    this.metaTagService.updateTag({ name: "description", content: "Warframe relics" });
    this.metaTagService.updateTag({ name: "author", content: "Codemaster Mick" });
    this.metaTagService.updateTag({ name: "robots", content: "index, follow" });

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
    this.allRelics = this.relic.getRelicsByType(type);
  }

  sortByIntact() {
    this.allRelics = this.relic.getRelicsByLevel("Intact");
  }

  sortByExceptional() {
    this.allRelics = this.relic.getRelicsByLevel("Exceptional");
  }

  sortByFlawless() {
    this.allRelics = this.relic.getRelicsByLevel("Flawless");
  }

  sortByRadiant() {
    this.allRelics = this.relic.getRelicsByLevel("Radiant");
  }
}
