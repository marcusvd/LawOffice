import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  uncheckableRadioModel = 'Middle';
  constructor() { }


  collapsed = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }



  ngOnInit() {
  }

}
