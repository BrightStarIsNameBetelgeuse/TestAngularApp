import { Component, OnInit, Input } from '@angular/core';
import { Test } from '../Test';

@Component({
  selector: 'app-data-detail',
  templateUrl: './data-detail.component.html',
  styleUrls: ['./data-detail.component.scss']
})
export class DataDetailComponent implements OnInit {
  @Input() data: Test;

  constructor() { }

  ngOnInit() {
  }

}
