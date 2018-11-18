import { Component, ViewChild } from '@angular/core';
import { ContentAreaComponent } from './content-area/content-area.component';
import { NavItem } from './nav-item';
import { NAV_ITEMS } from './mock-nav-items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  @ViewChild(ContentAreaComponent)
  private contentAreaComp: ContentAreaComponent;

  // TODO replace these with services
  navItems = NAV_ITEMS;
  
  focus: Boolean;
  selectedNavItem: NavItem;
  selectedNavItemIndex;
  selectedShowIndex;

  ngOnInit() {
    this.setSelectedNavItem(0);
    this.focus = true;
  }

  onKey(event: any) {
    if (event.key === "ArrowRight") {
      if (this.focus) {
        this.focus = false;
        this.selectedShowIndex = 0;
      }
      else if (this.selectedShowIndex % 4 < 3) {
        this.selectedShowIndex++;
      }
    } 

    if (event.key === "ArrowLeft") {
      if (this.selectedShowIndex % 4 === 0) {
        this.focus = true;
        this.selectedShowIndex = null;
      }
      else if (this.selectedShowIndex > 0) {
        this.selectedShowIndex--;
      }
    } 

    if (event.key === "ArrowDown") {
      if (this.focus && this.selectedNavItemIndex < this.navItems.length-1) {
        this.setSelectedNavItem(this.selectedNavItemIndex+1);
      }
      // TODO hardcoded max index, this should be fixed
      else if (!this.focus && this.selectedShowIndex >= 0 && this.selectedShowIndex < 4) {
        this.selectedShowIndex += 4;
      }
    }
    
    if (event.key === "ArrowUp") {
      if (this.focus && this.selectedNavItemIndex > 0) {
        this.setSelectedNavItem(this.selectedNavItemIndex-1);
      }
      else if (!this.focus && this.selectedShowIndex >= 4) {
        this.selectedShowIndex -= 4;
      }
    }

    if (event.key === "Enter") {
      if (this.focus) {
        this.selectedShowIndex = 0;
        this.focus = false;
      }
      else {
        this.contentAreaComp.showAlert();
      }
    }
    return false;
  }

  setSelectedNavItem(index: number) {
    this.selectedNavItemIndex = index;
    this.selectedNavItem = this.navItems[index];
  }
}
