import { Component, OnInit, Input } from "@angular/core";
import { WfDataService } from "app/shared/wf-data.service";
import { LazyItem } from "app/shared/lazyItem.interface";

@Component({
  selector: "app-wf-summary",
  templateUrl: "./wf-summary.component.html",
  styleUrls: ["./wf-summary.component.scss"]
})
export class WfSummaryComponent implements OnInit {
  @Input() frame: LazyItem;
  @Input() even: boolean;
  @Input() odd: boolean;

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
}
