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
    this.titleService.setTitle("Pathfinder Project Managment System");
    this.metaTagService.updateTag({ name: "description", content: "Simplifying project management for everyone" });
    this.metaTagService.updateTag({ name: "author", content: "Codemaster Mick" });
    this.metaTagService.updateTag({ name: "robots", content: "index, follow" });

    this.allRelics = this.relic.getAllRelics();
  }

}
