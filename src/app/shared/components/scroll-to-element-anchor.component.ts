import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from 'src/app/navigation/nav-item.model';
import { ScroolToService } from 'src/app/services/scroll-to.service';

@Component({
  selector: 'app-scroll-to-element-anchor',
  template: '<a (click)="scrollToElement(item.element)">{{ item.name }}</a>',
})
export class ScrollToElementAnchorComponent implements OnInit {
  @Input('item') item: NavItem;

  constructor(private scroolToService: ScroolToService) {}

  ngOnInit(): void {}

  scrollToElement(element): void {
    this.scroolToService.scrollToElement(element);
  }
}
