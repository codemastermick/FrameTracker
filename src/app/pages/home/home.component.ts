import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle('Pathfinder Project Managment System');
    this.metaTagService.updateTag({ name: 'description', content: 'Simplifying project management for everyone' });
    this.metaTagService.updateTag({ name: 'author', content: 'Codemaster Mick' });
    this.metaTagService.updateTag({ name: 'robots', content: 'index, follow' });
  }

}
