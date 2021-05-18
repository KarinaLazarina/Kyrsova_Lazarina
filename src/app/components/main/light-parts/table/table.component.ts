import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../../app.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  users: any;

  constructor(private service: AppService) {
    service.getDataForTable().subscribe(value => this.users = value);
  }

  ngOnInit(): void {
  }

}
