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
  @Input() focus;

  mockContentItems = CONTENT_ITEMS;
  showsList;

  constructor() { }

  ngOnInit() {
  }

  // react to changes in the selected list index
  @Input()
  set selectedListIndex(index: number) {
    this._selectedListIndex = index;
    this.showsList = this.mockContentItems[index];
  }

  // Adding an event listener to both components will not offer the best performance
  // TODO research other ways
  onKey(event: any) {
  }

}
