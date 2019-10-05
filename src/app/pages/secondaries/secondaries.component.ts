import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, HostListener } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
import { Type } from "warframe-items";
import { SecondaryWeaponsService } from "app/shared/secondary-weapons.service";
import { LazyItem } from "app/shared/lazyItem.interface";

@Component({
  selector: "app-secondaries",
  templateUrl: "./secondaries.component.html",
  styleUrls: ["./secondaries.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondariesComponent implements OnInit {

  allSecondaries: LazyItem[];

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private weapons: SecondaryWeaponsService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.titleService.setTitle("The Tenno Sanctuary: Secondary Weapons");
    this.metaTagService.updateTag({ name: "description", content: "Warframe secondary items" });
    this.metaTagService.updateTag({ name: "author", content: "Codemaster Mick" });
    this.metaTagService.updateTag({ name: "robots", content: "index, follow" });

    this.allSecondaries = this.weapons.getAllSecondaries();
  }


  @HostListener("window:scroll", ["$event"])
  onWindowScroll(e) {
    if (window.pageYOffset > 70) {
      const element = document.getElementsByClassName("filterbar")[0];
      element.classList.add("sticky-nav");
    } else {
      const element = document.getElementsByClassName("filterbar")[0];
      element.classList.remove("sticky-nav");
    }
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
