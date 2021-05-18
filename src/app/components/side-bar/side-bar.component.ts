import {Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  items;

  constructor(private service: AppService) {
    service.getDataForSidebar().subscribe(value => this.items = value);
    console.log(this.items);
  }

  ngOnInit(): void {
  }

}
