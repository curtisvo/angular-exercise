import { Component, OnInit } from '@angular/core';
import { NAV_ITEMS } from '../mock-nav-items';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  navItems = NAV_ITEMS;
  selectedNavItem;

  constructor() { }

  ngOnInit() {
  }

}
