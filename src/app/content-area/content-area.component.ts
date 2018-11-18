import { Component, OnInit, Input } from '@angular/core';
import { ContentItem } from '../content-item';
import { DataService } from '../data-service';
import { CONTENT_ITEMS } from '../mock-content-items';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.scss']
})
export class ContentAreaComponent implements OnInit {
  private _selectedListIndex: number;
  @Input() currentNavTitle;
  mockContentItems = CONTENT_ITEMS;

  private showsList;
  private selectedShowIndex: number;

  constructor() { }

  ngOnInit() {
    this.selectedShowIndex = null;
  }

  // react to changes in the selected list index
  @Input()
  set selectedListIndex(index: number) {
    this._selectedListIndex = index;
    this.showsList = this.mockContentItems[index];
  }

  moveSelection(direction: string) {
    if(direction === "up") {
      if (this.selectedShowIndex >= 4) {
        this.selectedShowIndex -= 4; 
      }
    }
    else if (direction === "down") {
      if (this.selectedShowIndex+4 < this.showsList.length) {
        this.selectedShowIndex += 4;
      }
    }
    else if (direction === "left") {
      if (this.selectedShowIndex % 4 === 0) {
        // if the leftmost show of the row, move focus to nav
	this.selectedShowIndex = null;
	
	// false tells nav to retake focus
	return false;
      }
      else {
        this.selectedShowIndex--;
      }
    }
    else if (direction === "right") {
      if (this.selectedShowIndex === null) {
        this.selectedShowIndex = 0;
      }
      else if (this.selectedShowIndex % 4 < 3 && this.selectedShowIndex+1 < this.showsList.length) {
        this.selectedShowIndex++;
      }
    }
    else {
      console.log("Error! invalid direction " + direction);
    }
    return true;
  }

  showAlert() {
    window.alert(this.showsList[this.selectedShowIndex]);
  }
}
