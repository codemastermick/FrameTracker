import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'warframe-items';

@Component({
  selector: 'app-components-display',
  templateUrl: './components-display.component.html',
  styleUrls: ['./components-display.component.scss']
})
export class ComponentsDisplayComponent implements OnInit {
  @Input() components: Item[];

  constructor() { }

  ngOnInit() {
  }

}
