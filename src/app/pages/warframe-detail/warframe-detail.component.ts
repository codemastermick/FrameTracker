import { Component, OnInit, ChangeDetectionStrategy, Input } from "@angular/core";
import { Item, Component as wfComponent } from "warframe-items";
import { Router } from "@angular/router";
import { WfDataService } from "app/shared/wf-data.service";
import { TagService } from "app/shared/tag-service.service";

@Component({
  selector: "app-warframe-detail",
  templateUrl: "./warframe-detail.component.html",
  styleUrls: ["./warframe-detail.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WarframeDetailComponent implements OnInit {
  frame: Item;

  constructor(
    private tagger: TagService,
    private router: Router,
    private wf: WfDataService) { }

  ngOnInit() {
    this.frame = this.wf.getWarframeByName(this.router.url.split("/")[2]);

    this.tagger.setTitle(`Details for ${this.frame.name}`);
    this.tagger.setDescription(`Warframe details for ${this.frame.name}`);
  }

  getImage(imageName: string) {
    return this.wf.getImage(imageName);
  }

  getThumb() {
    return this.wf.getThumb(this.frame.wikiaThumbnail);
  }

  getUniqueDrops(comp: wfComponent) {
    return comp.drops.filter((item, index) => {
      return comp.drops.indexOf(item) === index;
    });
  }

  getPassive() {
    return this.wf.getFramePassive(this.frame);
  }

  getAbilities() {
    return this.wf.getFrameAbilities(this.frame);
  }
}
