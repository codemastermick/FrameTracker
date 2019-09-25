import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'warframe-items';
import { RelicService } from 'app/shared/relic.service';

@Component({
  selector: 'app-relic-summary',
  templateUrl: './relic-summary.component.html',
  styleUrls: ['./relic-summary.component.scss']
})
export class RelicSummaryComponent implements OnInit {
  @Input() relic: Item;

  constructor(private relics: RelicService) { }

  ngOnInit() {
    this.relic = null;

    try {
      this.relic = JSON.parse(this.relic.toString());
    } catch (e) {
      this.relic = this.relic;
    }
  }

  getThumb() {
    return this.relics.getThumb(this.relic.imageName);
  }

}
