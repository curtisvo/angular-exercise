import { Component } from '@angular/core';
import { NavItem } from './nav-item';
import { NAV_ITEMS } from './mock-nav-items';
import { CONTENT_ITEMS } from './mock-content-items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  // TODO replace these with services
  navItems = NAV_ITEMS;
  shows = CONTENT_ITEMS;

  selectedNavItem: NavItem;
  showsList;

  onSelect(navItem: NavItem) {
    this.selectedNavItem = navItem;
    this.showsList = this.shows[navItem.id];
  }

  ngOnInit() {
    let initialItem: NavItem = this.navItems[0];
    this.selectedNavItem = initialItem;
    this.showsList = this.shows[initialItem.id];
  }

}
