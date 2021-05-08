import { Component, OnInit } from '@angular/core';
import {sidebarItems} from '../../data/dataForSidebar';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  items = sidebarItems;

  constructor() { }

  ngOnInit(): void {
  }

}
