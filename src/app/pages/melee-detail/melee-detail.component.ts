import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Item } from 'warframe-items';
import { Router } from '@angular/router';
import { MeleeService } from 'app/shared/melee.service';

@Component({
  selector: 'app-melee-detail',
  templateUrl: './melee-detail.component.html',
  styleUrls: ['./melee-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MeleeDetailComponent implements OnInit {
  melee: Item;

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private router: Router,
    private weapons: MeleeService) { }

  ngOnInit() {
    this.melee = this.weapons.getMeleeByName(this.router.url.split('/')[2]);

    this.titleService.setTitle(`Details for ${this.melee.name}`);
    this.metaTagService.updateTag({ name: 'description', content: `Primary weapon details for ${this.melee.name}` });
    this.metaTagService.updateTag({ name: 'author', content: 'Codemaster Mick' });
    this.metaTagService.updateTag({ name: 'robots', content: 'index, follow' });

  }

  getImage(imageName: string) {
    return this.weapons.getImage(imageName);
  }

  getThumb() {
    return this.weapons.getThumb(this.melee.wikiaThumbnail);
  }

}
