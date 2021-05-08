import {Component, OnInit} from '@angular/core';
import {actions, nameForHeader} from '../../../data/dataForHeader';


@Component({
  selector: 'app-first-line-in-header',
  templateUrl: './first-line-in-header.component.html',
  styleUrls: ['./first-line-in-header.component.scss']
})
export class FirstLineInHeaderComponent implements OnInit {
  act: string[] = actions;
  name: string = nameForHeader;

  constructor() {
  }

  ngOnInit(): void {

  }

}
