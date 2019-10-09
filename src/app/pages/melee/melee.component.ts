import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { Type } from "warframe-items";
import { MeleeService } from "app/shared/melee.service";
import { LazyItem } from "app/shared/lazyItem.interface";
import { TagService } from "app/shared/tag-service.service";

@Component({
  selector: "app-melee",
  templateUrl: "./melee.component.html",
  styleUrls: ["./melee.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MeleeComponent implements OnInit {

  allMelees: LazyItem[] = [];

  constructor(
    private tagger: TagService,
    private weapons: MeleeService,
    private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.tagger.setTitle("The Tenno Sanctuary: Melee Weapons");
    this.tagger.setDescription("Warframe melee items");

    this.allMelees = this.weapons.getAllMelees();
  }

  getThumb(imageName: string) {
    return this.weapons.getThumb(imageName);
  }

  resetFilters() {
    this.allMelees = this.weapons.getAllMelees();
    this.allMelees.sort((a, b) => (a.name > b.name) ? 1 : -1);
  }

  filterOn(type: Type) {
    this.allMelees = this.weapons.getAllOfType(type);
  }


  sortByDamage() {
    const newList: LazyItem[] = this.allMelees.sort((a, b) =>
      (a.damagePerShot.reduce((c, d) => c + d, 0) >
        b.damagePerShot.reduce((e, f) => e + f, 0)
      ) ? 1 : -1);
    this.allMelees = [...newList];
    this.changeDetectorRef.detectChanges();
  }

  sortByDPS() {
    const newList: LazyItem[] = this.allMelees.sort((a, b) => (a.damagePerSecond > b.damagePerSecond) ? 1 : -1);
    this.allMelees = [...newList];
    this.changeDetectorRef.detectChanges();
  }

  sortByCrit() {
    const newList: LazyItem[] = this.allMelees.sort((a, b) => (a.criticalChance > b.criticalChance) ? 1 : -1);
    this.allMelees = [...newList];
    this.changeDetectorRef.detectChanges();
  }

  sortByProc() {
    const newList: LazyItem[] = this.allMelees.sort((a, b) => (a.procChance > b.procChance) ? 1 : -1);
    this.allMelees = [...newList];
    this.changeDetectorRef.detectChanges();
  }
}
