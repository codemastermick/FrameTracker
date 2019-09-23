import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Item, Component as wfComponent, Drop, Polarity } from 'warframe-items';
import { Router } from '@angular/router';
import { WfDataService } from 'app/shared/wf-data.service';

@Component({
  selector: 'app-warframe-detail',
  templateUrl: './warframe-detail.component.html',
  styleUrls: ['./warframe-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WarframeDetailComponent implements OnInit {
  frame: Item;

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private router: Router,
    private wf: WfDataService) { }

  ngOnInit() {
    this.frame = this.wf.getWarframeByName(this.router.url.split('/')[2]);

    this.titleService.setTitle(`Details for ${this.frame.name}`);
    this.metaTagService.updateTag({ name: 'description', content: `Warframe details for ${this.frame.name}` });
    this.metaTagService.updateTag({ name: 'author', content: 'Codemaster Mick' });
    this.metaTagService.updateTag({ name: 'robots', content: 'index, follow' });
  }

  getImage(imageName: string) {
    return this.wf.getImage(imageName);
  }

  getThumb() {
    return this.wf.getThumb(this.frame.wikiaThumbnail);
  }

  getUniqueDrops(comp: Item) {
    return comp.drops.filter((item, index) => {
      return comp.drops.indexOf(item) === index;
    });
  }

  getPassive() {
    return this.wf.getFramePassive(this.frame);
  }
}
