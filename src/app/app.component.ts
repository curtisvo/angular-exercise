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
  selectedNavItemId;

  ngOnInit() {
    this.setSelectedNavItem(0);
    this.focus = true;
  }

  onKey(event: any) {
    let selectedNavItemIndex = this.navItems.indexOf(this.selectedNavItem);

    if (event.key === "ArrowRight") {
      if (this.focus) {
        this.focus = false;
      }
      this.contentAreaComp.moveSelection("right");
    } 

    if (event.key === "ArrowLeft") {
      if (!this.contentAreaComp.moveSelection("left")) {
        this.focus = true;
      }
    } 

    if (event.key === "ArrowDown") {
      if (this.focus && selectedNavItemIndex < this.navItems.length-1) {
        this.setSelectedNavItem(selectedNavItemIndex+1);
      }
      else if (!this.focus) {
        this.contentAreaComp.moveSelection("down");
      }
    }
    
    if (event.key === "ArrowUp") {
      if (this.focus && selectedNavItemIndex > 0) {
        this.setSelectedNavItem(selectedNavItemIndex-1);
      }
      else if (!this.focus) {
        this.contentAreaComp.moveSelection("up");
      }
    }

    if (event.key === "Enter") {
      if (this.focus) {
        this.contentAreaComp.moveSelection("right");
        this.focus = false;
      }
      else {
        this.contentAreaComp.showAlert();
      }
    }
    return false;
  }

  setSelectedNavItem(index: number) {
    this.selectedNavItemId = this.navItems[index].id;
    this.selectedNavItem = this.navItems[index];
  }
}
