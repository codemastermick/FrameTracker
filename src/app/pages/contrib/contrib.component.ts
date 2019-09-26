import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contrib',
  templateUrl: './contrib.component.html',
  styleUrls: ['./contrib.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContribComponent implements OnInit {

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle('Pathfinder Project Managment System');
    this.metaTagService.updateTag({ name: 'description', content: 'Simplifying project management for everyone' });
    this.metaTagService.updateTag({ name: 'author', content: 'Codemaster Mick' });
    this.metaTagService.updateTag({ name: 'robots', content: 'index, follow' });
  }

}
