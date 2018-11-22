import { Component, ViewChild } from '@angular/core';
import { ContentAreaComponent } from './content-area/content-area.component';
import { NavItem } from './nav-item';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  @ViewChild(ContentAreaComponent)
  private contentAreaComp: ContentAreaComponent;

  navItems: NavItem[];
  
  focus: Boolean;
  selectedNavItem: NavItem;

  constructor(private dataService: DataService) { }
  
  ngOnInit() {
    this.retrieveNavItems();
    this.setSelectedNavItem(0);
    this.focus = true;
  }

  retrieveNavItems() {
    this.navItems = this.dataService.getNavItems();
  }

  // keyboard control event listener
  onKey(event: any) {
    let selectedNavItemIndex = this.navItems.indexOf(this.selectedNavItem);

    if (event.key === "ArrowRight") {
      if (this.focus) {
        this.focus = false;
      }
      this.contentAreaComp.moveSelectionRight();
    } 

    if (event.key === "ArrowLeft") {
      if (!this.contentAreaComp.moveSelectionLeft()) {
        this.focus = true;
      }
    } 

    if (event.key === "ArrowDown") {
      if (this.focus && selectedNavItemIndex < this.navItems.length-1) {
        this.setSelectedNavItem(selectedNavItemIndex+1);
      }
      else if (!this.focus) {
        this.contentAreaComp.moveSelectionDown();
      }
    }
    
    if (event.key === "ArrowUp") {
      if (this.focus && selectedNavItemIndex > 0) {
        this.setSelectedNavItem(selectedNavItemIndex-1);
      }
      else if (!this.focus) {
        this.contentAreaComp.moveSelectionUp();
      }
    }

    if (event.key === "Enter") {
      if (this.focus) {
        this.contentAreaComp.moveSelectionRight();
        this.focus = false;
      }
      else {
        this.contentAreaComp.showAlert();
      }
    }
    return false;
  }

  // set the currently selected nav item by index
  setSelectedNavItem(index: number) {
    this.selectedNavItem = this.navItems[index];
    this.contentAreaComp.setSelectedList(this.selectedNavItem.id);
  }
}
