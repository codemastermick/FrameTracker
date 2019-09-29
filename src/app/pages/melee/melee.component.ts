import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Item, Type } from 'warframe-items';
import { MeleeService } from 'app/shared/melee.service';

@Component({
  selector: 'app-melee',
  templateUrl: './melee.component.html',
  styleUrls: ['./melee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MeleeComponent implements OnInit {

  allMelees: Item[];

  constructor(private titleService: Title, private metaTagService: Meta, private weapons: MeleeService) { }

  ngOnInit() {
    this.titleService.setTitle('Pathfinder Project Managment System');
    this.metaTagService.updateTag({ name: 'description', content: 'Simplifying project management for everyone' });
    this.metaTagService.updateTag({ name: 'author', content: 'Codemaster Mick' });
    this.metaTagService.updateTag({ name: 'robots', content: 'index, follow' });

    this.allMelees = this.weapons.getAllMelees();
  }

  getThumb(imageName: string) {
    return this.weapons.getThumb(imageName);
  }

  resetFilters() {
    this.allMelees = this.weapons.getAllMelees();
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
    this.allMelees.sort((a, b) => (a.damagePerSecond > b.damagePerSecond) ? 1 : -1)
  }
}
