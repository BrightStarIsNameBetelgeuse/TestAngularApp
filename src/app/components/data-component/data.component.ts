import { Component, OnInit } from '@angular/core';
import { Test } from '../../Test';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  data: Test[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.dataService.getData().subscribe(data => this.data = data);
  }
}
