import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.scss']
})
export class ContentAreaComponent implements OnInit {
  @Input() showsList; 
  @Input() currentNavTitle;

  constructor() { }

  ngOnInit() {
  }

}
