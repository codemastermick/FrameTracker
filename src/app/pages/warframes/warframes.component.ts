import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { WfDataService } from 'app/shared/wf-data.service';
import { Item } from 'warframe-items';

@Component({
  selector: 'app-warframes',
  templateUrl: './warframes.component.html',
  styleUrls: ['./warframes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WarframesComponent implements OnInit {

  allWarframes: Item[];

  constructor(private titleService: Title, private metaTagService: Meta, private wf: WfDataService) { }

  ngOnInit() {
    this.titleService.setTitle('The Tenno Sanctuary: Warframes');
    this.metaTagService.updateTag({ name: 'description', content: 'Warframes' });
    this.metaTagService.updateTag({ name: 'author', content: 'Codemaster Mick' });
    this.metaTagService.updateTag({ name: 'robots', content: 'index, follow' });

    this.allWarframes = this.wf.getAllWarframes();
  }

}
