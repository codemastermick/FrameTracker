import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Item } from 'warframe-items';
import { Router } from '@angular/router';
import { WfDataService } from 'app/shared/wf-data.service';

@Component({
  selector: 'app-primaries-detail',
  templateUrl: './primaries-detail.component.html',
  styleUrls: ['./primaries-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrimariesDetailComponent implements OnInit {
  primary: Item;

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private router: Router,
    private wf: WfDataService) { }

  ngOnInit() {
    this.primary = this.wf.getPrimaryByName(this.router.url.split('/')[2]);

    this.titleService.setTitle(`Details for ${this.primary.name}`);
    this.metaTagService.updateTag({ name: 'description', content: `Primary weapon details for ${this.primary.name}` });
    this.metaTagService.updateTag({ name: 'author', content: 'Codemaster Mick' });
    this.metaTagService.updateTag({ name: 'robots', content: 'index, follow' });

  }

  getThumb() {
    return this.wf.getThumb(this.primary.imageName);
  }

}
