import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { WfDataService } from "app/shared/wf-data.service";
import { Item, Type } from "warframe-items";
import { LazyItem } from "app/shared/lazyItem.interface";
import { TagService } from "app/shared/tag-service.service";

@Component({
  selector: "app-warframes",
  templateUrl: "./warframes.component.html",
  styleUrls: ["./warframes.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WarframesComponent implements OnInit {

  allWarframes: Item[];

  constructor(
    private tagger: TagService,
    private wf: WfDataService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.tagger.setTitle("The Tenno Sanctuary: Warframes");
    this.tagger.setDescription("Warframes");

    this.allWarframes = this.wf.getAllWarframes();
  }

  getThumb(imageName: string) {
    return this.wf.getThumb(imageName);
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
