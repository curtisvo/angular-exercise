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
  
  focus: Boolean;
  selectedNavItem: NavItem;
  selectedNavItemIndex;
  showsList;

  onSelect(navItem: NavItem) {
    this.selectedNavItem = navItem;
    this.showsList = this.shows[navItem.id];
  }

  ngOnInit() {
    this.setSelectedNavItem(0);
    this.focus = true;
  }

  onKey(event: any) {
    if (event.key === "ArrowRight" && this.focus) {
      console.log("switch focus to content");
      this.focus = false;
    } 
    if (event.key === "ArrowLeft" && !this.focus) {
      console.log("switch focus to nav");
      this.focus = true;
    } 
    if (event.key === "ArrowDown" && this.focus && this.selectedNavItemIndex < this.navItems.length-1) {
      this.setSelectedNavItem(this.selectedNavItemIndex+1);
    }
    if (event.key === "ArrowUp" && this.focus && this.selectedNavItemIndex > 0) {
      this.setSelectedNavItem(this.selectedNavItemIndex-1);
    }

    return false;
  }

  setSelectedNavItem(index: number) {
    this.selectedNavItemIndex = index;
    this.selectedNavItem = this.navItems[index];
    this.showsList = this.shows[this.selectedNavItem.id];
  }
}
