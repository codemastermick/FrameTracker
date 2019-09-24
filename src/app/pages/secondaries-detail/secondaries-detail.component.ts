import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Item } from 'warframe-items';
import { Router } from '@angular/router';
import { PrimaryWeaponsService } from 'app/shared/primary-weapons.service';

@Component({
  selector: 'app-secondaries-detail',
  templateUrl: './secondaries-detail.component.html',
  styleUrls: ['./secondaries-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondariesDetailComponent implements OnInit {
  secondary: Item;

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private router: Router,
    private weapons: PrimaryWeaponsService) { }

  ngOnInit() {
    this.secondary = this.weapons.getPrimaryByName(this.router.url.split('/')[2]);

    this.titleService.setTitle(`Details for ${this.secondary.name}`);
    this.metaTagService.updateTag({ name: 'description', content: `Primary weapon details for ${this.secondary.name}` });
    this.metaTagService.updateTag({ name: 'author', content: 'Codemaster Mick' });
    this.metaTagService.updateTag({ name: 'robots', content: 'index, follow' });

  }

  getImage(imageName: string) {
    return this.weapons.getImage(imageName);
  }

  getThumb() {
    return this.weapons.getThumb(this.secondary.wikiaThumbnail);
  }

}
