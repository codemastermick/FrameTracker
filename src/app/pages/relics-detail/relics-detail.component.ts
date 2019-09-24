import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Item } from 'warframe-items';
import { Router } from '@angular/router';
import { RelicService } from 'app/shared/relic.service';

@Component({
  selector: 'app-relics-detail',
  templateUrl: './relics-detail.component.html',
  styleUrls: ['./relics-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RelicsDetailComponent implements OnInit {
  relic: Item;

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private router: Router,
    private relics: RelicService) { }

  ngOnInit() {
    this.relic = this.relics.getRelicByName(this.router.url.split('/')[2]);

    this.titleService.setTitle(`Details for ${this.relic.name}`);
    this.metaTagService.updateTag({ name: 'description', content: `Primary weapon details for ${this.relic.name}` });
    this.metaTagService.updateTag({ name: 'author', content: 'Codemaster Mick' });
    this.metaTagService.updateTag({ name: 'robots', content: 'index, follow' });

  }

  getImage(imageName: string) {
    return this.relics.getImage(imageName);
  }

  getThumb() {
    return this.relics.getThumb(this.relic.imageName);
  }

}
