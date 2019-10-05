import { Component, OnInit, Input } from "@angular/core";
import { LazyItem } from "app/shared/lazyItem.interface";

@Component({
  selector: "app-weapon-detail",
  templateUrl: "./weapon-detail.component.html",
  styleUrls: ["./weapon-detail.component.scss"]
})
export class WeaponDetailComponent implements OnInit {
  @Input() weapon: LazyItem;

  constructor() { }

  ngOnInit() {
  }

}
