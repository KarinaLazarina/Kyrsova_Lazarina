import { Component, OnInit } from '@angular/core';
import {dataForTable} from '../../../../data/dataForTable';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  users: any = dataForTable;

  constructor() { }

  ngOnInit(): void {
  }

}
