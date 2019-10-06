import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
import { WfDataService } from "app/shared/wf-data.service";
import { Item, Type } from "warframe-items";
import { LazyItem } from "app/shared/lazyItem.interface";

@Component({
  selector: "app-warframes",
  templateUrl: "./warframes.component.html",
  styleUrls: ["./warframes.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WarframesComponent implements OnInit {

  allWarframes: Item[];

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private wf: WfDataService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.titleService.setTitle("The Tenno Sanctuary: Warframes");
    this.metaTagService.updateTag({ name: "description", content: "Warframes" });
    this.metaTagService.updateTag({ name: "author", content: "Codemaster Mick" });
    this.metaTagService.updateTag({ name: "robots", content: "index, follow" });

    this.allWarframes = this.wf.getAllWarframes();
  }

  resetFilters() {
    this.allWarframes = this.wf.getAllWarframes();
    this.allWarframes.sort((a, b) => (a.name > b.name) ? 1 : -1);
  }

  filterOn(type: Type) {
    this.allWarframes = this.wf.getAllOfType(type);
  }

  sortByArmour() {
    const newList: LazyItem[] = this.allWarframes.sort((a, b) => (a.armor > b.armor) ? 1 : -1);
    this.allWarframes = [...newList];
    this.changeDetectorRef.detectChanges();
  }

  sortByHealth() {
    const newList: LazyItem[] = this.allWarframes.sort((a, b) => (a.health > b.health) ? 1 : -1);
    this.allWarframes = [...newList];
    this.changeDetectorRef.detectChanges();
  }

  sortByShield() {
    const newList: LazyItem[] = this.allWarframes.sort((a, b) => (a.shield > b.shield) ? 1 : -1);
    this.allWarframes = [...newList];
    this.changeDetectorRef.detectChanges();
  }

  sortByEnergy() {
    const newList: LazyItem[] = this.allWarframes.sort((a, b) => (a.power > b.power) ? 1 : -1);
    this.allWarframes = [...newList];
    this.changeDetectorRef.detectChanges();
  }
}
