import { Component, OnInit, Input } from '@angular/core';
import { Test } from '../../Test';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-data-detail',
  templateUrl: './data-detail.component.html',
  styleUrls: ['./data-detail.component.scss']
})
export class DataDetailComponent implements OnInit {
  @Input() data: Test;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getDataItem(id)
      .subscribe(data => this.data = data);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.dataService.updateData(this.data)
      .subscribe(() => this.goBack());
  }

}
