import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../app.service';


@Component({
  selector: 'app-first-line-in-header',
  templateUrl: './first-line-in-header.component.html',
  styleUrls: ['./first-line-in-header.component.scss']
})
export class FirstLineInHeaderComponent implements OnInit {
  act: string[];
  name: string;

  constructor(private service: AppService) {
    service.getDataForHeader().subscribe(value => {
      this.act = value[0].actions.split(',');
      console.log(this.act);
      this.name = value[0].name;
    });
  }

  ngOnInit(): void {

  }

}
