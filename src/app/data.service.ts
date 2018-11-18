import { Injectable } from '@angular/core';
import { NavItem } from './nav-item';
import { NAV_ITEMS } from './mock-nav-items';
import { CONTENT_ITEMS } from './mock-content-items';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  navItems = NAV_ITEMS;
  contentItems = CONTENT_ITEMS;

  constructor() { }

  // TODO implement with Observable
  getNavItems() {
      console.log("DataService: get nav items");
      return this.navItems;
  }

  // TODO implement with Observable
  getContentItemsForList(id: number) {
    console.log("DataService: get content items for " + id);
    return this.contentItems[id];
  }
}
