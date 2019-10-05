import { Component, OnInit, Input } from "@angular/core";
import { DamageTypes } from "warframe-items";

@Component({
  selector: "app-damage-display",
  templateUrl: "./damage-display.component.html",
  styleUrls: ["./damage-display.component.scss"]
})
export class DamageDisplayComponent implements OnInit {
  @Input() damageTypes: DamageTypes;

  constructor() { }

  ngOnInit() {
  }

}
