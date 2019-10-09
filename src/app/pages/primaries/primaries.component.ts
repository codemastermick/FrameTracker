import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { Type } from "warframe-items";
import { PrimaryWeaponsService } from "../../shared/primary-weapons.service";
import { LazyItem } from "app/shared/lazyItem.interface";
import { TagService } from "app/shared/tag-service.service";

@Component({
  selector: "app-primaries",
  templateUrl: "./primaries.component.html",
  styleUrls: ["./primaries.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrimariesComponent implements OnInit {

  allPrimaries: LazyItem[];

  constructor(
    private tagger: TagService,
    private weapons: PrimaryWeaponsService,
    private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.tagger.setTitle("The Tenno Sanctuary: Primary Weapons");
    this.tagger.setDescription("Warframe primary items");

    this.allPrimaries = this.weapons.getAllPrimaries();
  }

  getThumb(imageName: string) {
    return this.weapons.getThumb(imageName);
  }

  resetFilters() {
    this.allPrimaries = this.weapons.getAllPrimaries();
    this.allPrimaries.sort((a, b) => (a.name > b.name) ? 1 : -1);
  }

  filterOn(type: Type) {
    this.allPrimaries = this.weapons.getAllOfType(type);
  }


  sortByDamage() {
    const newList: LazyItem[] = this.allPrimaries.sort((a, b) =>
      (a.damagePerShot.reduce((c, d) => c + d, 0) >
        b.damagePerShot.reduce((e, f) => e + f, 0)
      ) ? 1 : -1);
    this.allPrimaries = [...newList];
    this.changeDetectorRef.detectChanges();
  }

  sortByDPS() {
    const newList: LazyItem[] = this.allPrimaries.sort((a, b) => (a.damagePerSecond > b.damagePerSecond) ? 1 : -1);
    this.allPrimaries = [...newList];
    this.changeDetectorRef.detectChanges();
  }

  sortByCrit() {
    const newList: LazyItem[] = this.allPrimaries.sort((a, b) => (a.criticalChance > b.criticalChance) ? 1 : -1);
    this.allPrimaries = [...newList];
    this.changeDetectorRef.detectChanges();
  }

  sortByProc() {
    const newList: LazyItem[] = this.allPrimaries.sort((a, b) => (a.procChance > b.procChance) ? 1 : -1);
    this.allPrimaries = [...newList];
    this.changeDetectorRef.detectChanges();
  }

}
