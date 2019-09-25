import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'warframe-items';
import { WfDataService } from 'app/shared/wf-data.service';

@Component({
  selector: 'app-wf-summary',
  templateUrl: './wf-summary.component.html',
  styleUrls: ['./wf-summary.component.scss']
})
export class WfSummaryComponent implements OnInit {
  @Input() frame: Item;

  constructor(public wf: WfDataService) { }

  ngOnInit() {
    try {
      this.frame = JSON.parse(this.frame.toString());
    } catch (e) {
      this.frame = this.frame;
    }
  }

  getThumb(imageName: string) {
    return this.wf.getThumb(imageName);
  }

  public openDetails() {
    // open overlay with detail view
  }

}
