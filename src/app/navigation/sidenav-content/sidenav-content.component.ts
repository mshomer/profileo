import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NavItem } from '../nav-item.model';
import { ScrollToService } from 'src/app/services/scroll-to.service';

@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.scss'],
})
export class SidenavContentComponent implements OnInit {
  @Input('items') items: NavItem[];
  @Output() sidenavToggle = new EventEmitter();

  constructor(private scrollToService: ScrollToService) {}

  ngOnInit(): void {}

  onToggleSidenav = () => {
    this.sidenavToggle.emit();
  };

  scrollToElement(element): void {
    this.scrollToService.scrollToElement(element);
  }
}
