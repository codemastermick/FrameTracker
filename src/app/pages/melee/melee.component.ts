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

  getFilteredList(type: Type) {
    this.allMelees = this.weapons.getAllOfType(type);
  }

  getMultipleLists(types: Type[]) {
    this.allMelees = this.weapons.getMultipleTypes(types);
  }

}
