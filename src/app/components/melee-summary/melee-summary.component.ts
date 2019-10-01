import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { MeleeService } from 'app/shared/melee.service';
import { LazyItem } from 'app/shared/lazyItem.interface';

@Component({
  selector: 'app-melee-summary',
  templateUrl: './melee-summary.component.html',
  styleUrls: ['./melee-summary.component.scss']
})
export class MeleeSummaryComponent implements OnInit, AfterViewInit {
  @Input() melee: LazyItem;
  @Input() even: boolean;
  @Input() odd: boolean;

  observer = new IntersectionObserver(entries => {
    entries.forEach(x => {
      this.melee.show = x.intersectionRatio > 0.1;
      console.log(`Setting ${this.melee.name} as ${this.melee.show ? 'visible' : 'hidden'}`);
    });
  }, { root: null, threshold: [0.1] });

  constructor(public weapons: MeleeService) { }

  ngOnInit() {
    try {
      this.melee = JSON.parse(this.melee.toString());
    } catch (e) {
      this.melee = this.melee;
    }
  }

  ngAfterViewInit() {
    this.observer.observe(document.querySelector('cdk-virtual-scroll-viewport'));
  }

  getThumb() {
    return this.weapons.getThumb(this.melee.wikiaThumbnail || this.melee.imageName);
  }

  getDPS() {
    return this.melee.damagePerShot.reduce((a, b) => a + b, 0);
  }

}
