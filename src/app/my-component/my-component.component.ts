import { Component, OnInit } from '@angular/core';
import { Test } from '../Test';
import { DataService } from '../data.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent implements OnInit {
  data: Test[];
  selectedData: Test;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getData();
  }
  onSelect(data): void {
    this.selectedData = data;
  }
  getData(): void {
    this.data = this.dataService.getData();
  }

}
