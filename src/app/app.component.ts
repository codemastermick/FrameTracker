import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The Sanctuary';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 38) {
      const element = document.getElementsByTagName('mat-toolbar')[0];
      element.classList.add('sticky-nav');
    } else {
      const element = document.getElementsByTagName('mat-toolbar')[0];
      element.classList.remove('sticky-nav');
    }
  }
}
