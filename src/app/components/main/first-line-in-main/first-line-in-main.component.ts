import { Component, OnInit } from '@angular/core';
import {dataForFL} from '../../../data/dataForFLMain';

@Component({
  selector: 'app-first-line-in-main',
  templateUrl: './first-line-in-main.component.html',
  styleUrls: ['./first-line-in-main.component.scss']
})
export class FirstLineInMainComponent implements OnInit {
  text = dataForFL;

  constructor() { }

  ngOnInit(): void {
  }

}
