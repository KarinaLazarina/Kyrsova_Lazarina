import { Component, OnInit } from '@angular/core';
import {dataForPB} from '../../../../data/dataForProgressBar';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  data: any = dataForPB;

  constructor() { }

  ngOnInit(): void {
  }

}
