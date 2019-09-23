import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Item } from 'warframe-items';
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
    let name = this.router.url.split('/')[2];
    name = name.replace(/^./, name[0].toUpperCase());
    this.frame = this.wf.getWarframeByName(name);

    // this.titleService.setTitle(`Details for ${this.frame.name}`);
    // this.metaTagService.updateTag({ name: 'description', content: `Warframe details for ${this.frame.name}` });
    // this.metaTagService.updateTag({ name: 'author', content: 'Codemaster Mick' });
    // this.metaTagService.updateTag({ name: 'robots', content: 'index, follow' });

    // this.frame = JSON.parse(this.frame.toString());
  }

  getThumb(){
    return this.wf.getThumbnail(this.frame.imageName);
  }

}