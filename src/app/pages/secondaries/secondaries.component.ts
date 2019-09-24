import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Item } from 'warframe-items';
import { PrimaryWeaponsService } from '../../shared/primary-weapons.service';

@Component({
  selector: 'app-secondaries',
  templateUrl: './secondaries.component.html',
  styleUrls: ['./secondaries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondariesComponent implements OnInit {

  allSecondaries: Item[];

  constructor(private titleService: Title, private metaTagService: Meta, private weapons: PrimaryWeaponsService) { }

  ngOnInit() {
    this.titleService.setTitle('Pathfinder Project Managment System');
    this.metaTagService.updateTag({ name: 'description', content: 'Simplifying project management for everyone' });
    this.metaTagService.updateTag({ name: 'author', content: 'Codemaster Mick' });
    this.metaTagService.updateTag({ name: 'robots', content: 'index, follow' });

    this.allSecondaries = this.weapons.getAllPrimaries();
  }

  getThumb(imageName: string) {
    return this.weapons.getThumb(imageName);
  }

}
