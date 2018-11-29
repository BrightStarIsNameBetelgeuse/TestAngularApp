import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Test } from '../../Test';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data: Test[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getData();
  }
  getData(): void {
    this.dataService.getData().subscribe(data => this.data = data.slice(1, 3));
  }

}
