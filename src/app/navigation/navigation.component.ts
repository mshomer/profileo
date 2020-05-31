import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from './nav-item.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Input('items') items: NavItem[];

  constructor() {}

  ngOnInit(): void {}
}
