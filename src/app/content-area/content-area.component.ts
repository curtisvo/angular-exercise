import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.scss']
})
export class ContentAreaComponent implements OnInit {
  @Input() showsList; 
  @Input() currentNavTitle;
  focus = false;

  constructor() { }

  ngOnInit() {
  }

  // Adding an event listener to both components will not offer the best performance
  // TODO research other ways
  onKey(event: any) {
    if (focus === true) {
      console.log("contentarea");
    }
    if (event.key === "ArrowRight" && focus === false) {
      focus = true; 

    }
  }

}
