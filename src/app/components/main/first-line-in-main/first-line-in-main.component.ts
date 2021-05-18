import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../app.service';

@Component({
  selector: 'app-first-line-in-main',
  templateUrl: './first-line-in-main.component.html',
  styleUrls: ['./first-line-in-main.component.scss']
})
export class FirstLineInMainComponent implements OnInit {
  text;

  constructor(private service: AppService) {
    service.getDataForFLMain().subscribe(value => this.text = value);
  }

  ngOnInit(): void {
  }

}
