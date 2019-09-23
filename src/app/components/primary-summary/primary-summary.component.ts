import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'warframe-items';
import { WfDataService } from 'app/shared/wf-data.service';

@Component({
  selector: 'app-primary-summary',
  templateUrl: './primary-summary.component.html',
  styleUrls: ['./primary-summary.component.scss']
})
export class PrimarySummaryComponent implements OnInit {
  @Input() primary: Item;

  constructor(public wf: WfDataService) { }

  ngOnInit() {
    this.primary = JSON.parse(this.primary.toString());
  }

  getThumb() {
    return this.wf.getThumbnail(this.primary.imageName);
  }

  public openDetails() {
    // open overlay with detail view
  }

}
