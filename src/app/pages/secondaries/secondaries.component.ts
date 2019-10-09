import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { Type } from "warframe-items";
import { SecondaryWeaponsService } from "app/shared/secondary-weapons.service";
import { LazyItem } from "app/shared/lazyItem.interface";
import { TagService } from "app/shared/tag-service.service";

@Component({
  selector: "app-secondaries",
  templateUrl: "./secondaries.component.html",
  styleUrls: ["./secondaries.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondariesComponent implements OnInit {

  allSecondaries: LazyItem[];

  constructor(
    private tagger: TagService,
    private weapons: SecondaryWeaponsService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.tagger.setTitle("The Tenno Sanctuary: Secondary Weapons");
    this.tagger.setDescription("Warframe secondary items");

    this.allSecondaries = this.weapons.getAllSecondaries();
  }

  getThumb(imageName: string) {
    return this.weapons.getThumb(imageName);
  }

  resetFilters() {
    this.allSecondaries = this.weapons.getAllSecondaries();
    this.allSecondaries.sort((a, b) => (a.name > b.name) ? 1 : -1);
  }

  filterOn(type: Type) {
    this.allSecondaries = this.weapons.getAllOfType(type);
  }


  sortByDamage() {
    const newList: LazyItem[] = this.allSecondaries.sort((a, b) =>
      (a.damagePerShot.reduce((c, d) => c + d, 0) >
        b.damagePerShot.reduce((e, f) => e + f, 0)
      ) ? 1 : -1);
    this.allSecondaries = [...newList];
    this.changeDetectorRef.detectChanges();
  }

  sortByDPS() {
    const newList: LazyItem[] = this.allSecondaries.sort((a, b) => (a.damagePerSecond > b.damagePerSecond) ? 1 : -1);
    this.allSecondaries = [...newList];
    this.changeDetectorRef.detectChanges();
  }

  sortByCrit() {
    const newList: LazyItem[] = this.allSecondaries.sort((a, b) => (a.criticalChance > b.criticalChance) ? 1 : -1);
    this.allSecondaries = [...newList];
    this.changeDetectorRef.detectChanges();
  }

  sortByProc() {
    const newList: LazyItem[] = this.allSecondaries.sort((a, b) => (a.procChance > b.procChance) ? 1 : -1);
    this.allSecondaries = [...newList];
    this.changeDetectorRef.detectChanges();
  }

}
