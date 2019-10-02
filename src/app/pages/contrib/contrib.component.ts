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
    this.titleService.setTitle('The Tenno Sanctuary: Contribution Information');
    this.metaTagService.updateTag({ name: 'description', content: 'Contribution information for The Tenno Sanctuary' });
    this.metaTagService.updateTag({ name: 'author', content: 'Codemaster Mick' });
    this.metaTagService.updateTag({ name: 'robots', content: 'index, follow' });
  }

}
