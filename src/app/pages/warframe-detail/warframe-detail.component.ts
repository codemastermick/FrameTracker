import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Item } from 'warframe-items';

@Component({
  selector: 'app-warframes-detail',
  templateUrl: './warframes-detail.component.html',
  styleUrls: ['./warframes-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WarframeDetailComponent implements OnInit {
  @Input() frame: Item;

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle('Pathfinder Project Managment System');
    this.metaTagService.updateTag({ name: 'description', content: 'Simplifying project management for everyone' });
    this.metaTagService.updateTag({ name: 'author', content: 'Codemaster Mick' });
    this.metaTagService.updateTag({ name: 'robots', content: 'index, follow' });

    this.frame = JSON.parse(this.frame.toString());
  }

}
