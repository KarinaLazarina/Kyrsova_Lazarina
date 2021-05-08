import { Component, OnInit } from '@angular/core';
import {Calendar} from '../../../../../assets/scripts/calendar.js';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const calendar = new Calendar('calendar-wrap');
  }

}
