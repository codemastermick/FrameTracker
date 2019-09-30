import { Component, OnInit, Input } from '@angular/core';
import { MeleeService } from 'app/shared/melee.service';
import { LazyItem } from 'app/shared/lazyItem.interface';

@Component({
  selector: 'app-melee-summary',
  templateUrl: './melee-summary.component.html',
  styleUrls: ['./melee-summary.component.scss']
})
export class MeleeSummaryComponent implements OnInit {
  @Input() melee: LazyItem;
  @Input() even: boolean;
  @Input() odd: boolean;

  observer = new IntersectionObserver(entries => {
    entries.forEach(x => {
      if (x.intersectionRatio > 0) {
        this.melee.show = true;
        // console.log('Setting show state on ' + this.melee.name);
      } else {
        this.melee.show = false;
        // console.log('Setting hide state on ' + this.melee.name);
      }
    });
  }, { root: null, threshold: [0] });

  constructor(public weapons: MeleeService) { }

  ngOnInit() {
    try {
      this.melee = JSON.parse(this.melee.toString());
    } catch (e) {
      this.melee = this.melee;
    }
    const cards = document.querySelectorAll('app-melee');
    cards.forEach(c => this.observer.observe(c));
    // this.observer.observe(document.getElementsByTagName('app-melee-summary')[0]);
  }

  getThumb() {
    return this.weapons.getThumb(this.melee.wikiaThumbnail || this.melee.imageName);
  }

  getDPS() {
    return this.melee.damagePerShot.reduce((a, b) => a + b, 0);
  }

}
