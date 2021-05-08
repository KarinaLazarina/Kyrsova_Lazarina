import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-of-list',
  templateUrl: './item-of-list.component.html',
  styleUrls: ['./item-of-list.component.scss']
})
export class ItemOfListComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  photo: string;
  @Input()
  status: string;

  constructor() {}



  ngOnInit(): void {
  }

}
