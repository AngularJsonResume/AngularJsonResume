import { Component } from '@angular/core';
import {DemoService} from '../../services/demo.service';
import {Observable} from 'rxjs/Rx';

@Component({
    moduleId:module.id,
    selector: 'navbar',
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent {




    public peoples;




    constructor(private _demoService: DemoService) { }

    ngOnInit() {

        this.getPeoples();
    }



    

}
