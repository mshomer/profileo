import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NavItem } from '../nav-item.model';
import { ScrollToService } from 'src/app/services/scroll-to.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Input('items') items: NavItem[];
  @Output() sidenavClose = new EventEmitter();

  constructor(private scrollToService: ScrollToService) {}

  ngOnInit(): void {}

  onSidenavClose = () => {
    this.sidenavClose.emit();
  };

  scrollToElement(element): void {
    this.scrollToService.scrollToElement(element);
  }
}
