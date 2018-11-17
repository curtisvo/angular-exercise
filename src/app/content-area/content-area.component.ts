import { Component, OnInit } from '@angular/core';
import { CONTENT_ITEMS } from '../mock-content-items';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.scss']
})
export class ContentAreaComponent implements OnInit {
//@Input() content;

  currentNavItem = {
  	title: 'New Releases',
	id: 1
  }
  constructor() { }

  ngOnInit() {
  }

}
