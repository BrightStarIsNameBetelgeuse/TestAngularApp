import { Component, OnInit } from '@angular/core';
import { Test } from '../Test';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent implements OnInit {
  test: Test = {
    id: 1,
    name: 'Test title',
  };
  constructor() { }

  ngOnInit() {
  }

}
