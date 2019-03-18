import { Component, OnInit, Input } from '@angular/core';
import { Profile } from './models/profile.model';
import { DataService } from '../data.service';

@Component({
  selector: 'task-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private dataService: DataService) { 
    
  }

  model = new Profile("", "", "", "", "", "",false, false, false,false );
  // @Input()form: any = [];

  ngOnInit() {
    // this.dataService.getData("hi");
  }

ngonChange(){
  
}
checkAll(data) {
  if (data.all) {
    this.model.swimming = true;
    this.model.running = true;
    this.model.cricket = true;
  }else {
    this.model.swimming = false;
    this.model.running = false;
    this.model.cricket = false;
  }
};

send(data){

  this.dataService.myMethod(data);
}

}
