import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'task-display-form',
  templateUrl: './display-form.component.html',
  styleUrls: ['./display-form.component.scss']
})
export class DisplayFormComponent implements OnInit {
  public data: any;
  constructor(private dataService: DataService) {
    dataService.myMethod$.subscribe((data) => {
      this.data = data;
    })
  }


  ngOnInit() {
    // console.log("in display")
    // console.log(this.data);
  }


}
