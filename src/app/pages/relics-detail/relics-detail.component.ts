import { Component, OnInit, ChangeDetectionStrategy, Input } from "@angular/core";
import { Item } from "warframe-items";
import { Router } from "@angular/router";
import { RelicService } from "app/shared/relic.service";
import { TagService } from "app/shared/tag-service.service";

@Component({
  selector: "app-relics-detail",
  templateUrl: "./relics-detail.component.html",
  styleUrls: ["./relics-detail.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RelicsDetailComponent implements OnInit {
  relic: Item;

  constructor(
    private tagger: TagService,
    private router: Router,
    private relics: RelicService) { }

  ngOnInit() {
    this.relic = this.relics.getRelicByName(this.router.url.split("/")[2]);

    this.tagger.setTitle(`Details for ${this.relic.name}`);
    this.tagger.setDescription(`Primary weapon details for ${this.relic.name}`);

  }

  getImage(imageName: string) {
    return this.relics.getImage(imageName);
  }

  getThumb() {
    return this.relics.getThumb(this.relic.imageName);
  }

}
