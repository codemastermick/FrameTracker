import { Component, OnInit, Input } from "@angular/core";
import { LazyItem } from "app/shared/lazyItem.interface";

@Component({
  selector: "app-build-section",
  templateUrl: "./build-section.component.html",
  styleUrls: ["./build-section.component.scss"]
})
export class BuildSectionComponent implements OnInit {
  @Input() weapon: LazyItem;

  constructor() { }

  ngOnInit() {
  }

}
