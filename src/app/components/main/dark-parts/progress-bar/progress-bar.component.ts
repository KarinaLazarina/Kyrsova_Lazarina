import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../../app.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  data: any;

  constructor(private service: AppService) {
    service.getDataForPB().subscribe(value => this.data = value);
  }

  ngOnInit(): void {
  }

}
