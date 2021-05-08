import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {
  @Input()
  obj: any;

  // sum = this.obj.sum;
  // total1 = this.obj.total1;
  // total2 = this.obj.total2;
  // next = this.obj.next;

  constructor() {
  }

  ngOnInit(): void {
  }

}
