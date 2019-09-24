import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-disposition',
  templateUrl: './disposition.component.html',
  styleUrls: ['./disposition.component.scss']
})
export class DispositionComponent implements OnInit {
  @Input() disposition: number;
  stars: any;

  constructor() { }

  ngOnInit() {
    this.stars = Array(this.disposition).fill(this.disposition); // [4,4,4,4,4]
  }

}
