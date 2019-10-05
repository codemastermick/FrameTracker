import { Component, OnInit, Input } from "@angular/core";
import { LazyItem } from "app/shared/lazyItem.interface";

@Component({
  selector: "app-damage-breakdown",
  templateUrl: "./damage-breakdown.component.html",
  styleUrls: ["./damage-breakdown.component.scss"]
})
export class DamageBreakdownComponent implements OnInit {
  @Input() weapon: LazyItem;
  isOpened = false;

  constructor() { }

  ngOnInit() {
  }
}
