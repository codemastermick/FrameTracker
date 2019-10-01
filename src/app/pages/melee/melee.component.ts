import { Component, OnInit, ChangeDetectionStrategy, HostListener, AfterViewInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Type } from 'warframe-items';
import { MeleeService } from 'app/shared/melee.service';
import { LazyItem } from 'app/shared/lazyItem.interface';

@Component({
  selector: 'app-melee',
  templateUrl: './melee.component.html',
  styleUrls: ['./melee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MeleeComponent implements OnInit {

  allMelees: LazyItem[] = [];

  constructor(private titleService: Title, private metaTagService: Meta, private weapons: MeleeService) { }

  ngOnInit() {
    this.titleService.setTitle('Pathfinder Project Managment System');
    this.metaTagService.updateTag({ name: 'description', content: 'Simplifying project management for everyone' });
    this.metaTagService.updateTag({ name: 'author', content: 'Codemaster Mick' });
    this.metaTagService.updateTag({ name: 'robots', content: 'index, follow' });

    this.allMelees = this.weapons.getAllMelees();
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
    this.allMelees = this.weapons.getAllMelees();
    this.allMelees.sort((a, b) => (a.name > b.name) ? 1 : -1);
  }

  filterOn(type: Type) {
    this.allMelees = this.weapons.getAllOfType(type);
  }


  sortByDamage() {
    this.allMelees.sort((a, b) =>
      (a.damagePerShot.reduce((c, d) => c + d, 0) >
        b.damagePerShot.reduce((e, f) => e + f, 0)
      ) ? 1 : -1);
  }

  sortByDPS() {
    this.allMelees.sort((a, b) => (a.damagePerSecond > b.damagePerSecond) ? 1 : -1);
  }
}
