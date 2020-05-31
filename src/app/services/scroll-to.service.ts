import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollToService {
  navigationOffset = -80;

  scrollToElement(element): void {
    const top =
      element.getBoundingClientRect().top +
      window.pageYOffset +
      this.navigationOffset;
    window.scrollTo({ top: top, behavior: 'smooth' });
  }
}
