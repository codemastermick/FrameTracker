import { Component, OnInit, ChangeDetectionStrategy, HostListener, ChangeDetectorRef } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Item, Type } from 'warframe-items';
import { PrimaryWeaponsService } from '../../shared/primary-weapons.service';
import { LazyItem } from 'app/shared/lazyItem.interface';

@Component({
  selector: 'app-primaries',
  templateUrl: './primaries.component.html',
  styleUrls: ['./primaries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrimariesComponent implements OnInit {

  allPrimaries: Item[];

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private weapons: PrimaryWeaponsService,
    private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.titleService.setTitle('The Tenno Sanctuary: Primary Weapons');
    this.metaTagService.updateTag({ name: 'description', content: 'Warframe primary items' });
    this.metaTagService.updateTag({ name: 'author', content: 'Codemaster Mick' });
    this.metaTagService.updateTag({ name: 'robots', content: 'index, follow' });

    this.allPrimaries = this.weapons.getAllPrimaries();
  }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 70) {
      const element = document.getElementsByClassName('filterbar')[0];
      element.classList.add('sticky-nav');
    } else {
      const element = document.getElementsByClassName('filterbar')[0];
      element.classList.remove('sticky-nav');
    }
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
