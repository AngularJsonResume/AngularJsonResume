import { Component } from '@angular/core';
import {DemoService} from '../../services/demo.service';
import {Observable} from 'rxjs/Rx';

@Component({
  moduleId:module.id,
  selector: 'home',
  templateUrl: 'home.component.html'
})
export class HomeComponent {

 
  public peoples;



  constructor(private _demoService: DemoService) { }

  ngOnInit() {
    
    this.getPeoples();
  }



  getPeoples() {
    this._demoService.getPeoples().subscribe(
      data => {
        this.peoples = data[0]

      }
      // No error or completion callbacks here. They are optional, but
      // you will get console errors if the Observable is in an error state.
    );
  }

 

}
