import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.scss']
})

export class ContentAreaComponent implements OnInit {
  private _selectedListIndex: number;
  @Input() currentNavTitle;

  private showsList;
  private selectedShowIndex: number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.selectedShowIndex = null;
  }

  // react to changes in the selected list index
  @Input()
  set selectedListIndex(index: number) {
    this._selectedListIndex = index;
    this.showsList = this.dataService.getContentItemsForList(index);
  }

  moveSelectionUp() {
    if (this.selectedShowIndex >= 4) {
      this.selectedShowIndex -= 4; 
    }
  }

  moveSelectionDown() {
    if (this.selectedShowIndex+4 < this.showsList.length) {
      this.selectedShowIndex += 4;
    }
  }

  moveSelectionLeft() {
    if (this.selectedShowIndex % 4 === 0) {
      // if the leftmost show of the row, move focus to nav
      this.selectedShowIndex = null;
	
      // false tells nav to retake focus
      return false;
    }
    else {
      this.selectedShowIndex--;
    }
    return true;
  }

  moveSelectionRight() {
    if (this.selectedShowIndex === null) {
      this.selectedShowIndex = 0;
    }
    else if (this.selectedShowIndex % 4 < 3 && this.selectedShowIndex+1 < this.showsList.length) {
      this.selectedShowIndex++;
    }
  }

  showAlert() {
    window.alert(this.showsList[this.selectedShowIndex]);
  }
}
