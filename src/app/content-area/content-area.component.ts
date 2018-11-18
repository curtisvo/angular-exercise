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
  private _focus;
  @Input() focus;

  mockContentItems = CONTENT_ITEMS;
  showsList;
  selectedShowIndex;

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
  /*
  @Input()
  set focus(focus) {
    if (this._focus === false && focus === true) {
      this.selectedShowIndex = 0;
      }
      else if (this._focus === true && focus === false) {
      this.selectedShowIndex = null;
      }
      console.log("setfocus");
    this._focus = focus;
  }
  */
  // Adding an event listener to both components will not offer the best performance
  // TODO research other ways
  onKey(event: any) {
    if(event.key === "ArrowRight" && this.focus) {
      if (this.selectedShowIndex === null) {
        this.selectedShowIndex = 0;
      }
      else if (this.selectedShowIndex < 3) {
      	this.selectedShowIndex++;
      }
    }
  }

}
