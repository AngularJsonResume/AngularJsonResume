import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';


import {DemoService} from './services/demo.service'
import {NavbarComponent} from './components/navbar/navbar.component';
import {JumbotronComponent} from './components/jumbotron/jumbotron.component';
import {HomeComponent} from './components/pages/home.component';
import {AboutComponent} from './components/pages/about.component';

@NgModule({
    imports:      [ BrowserModule, HttpModule, FormsModule ],
    declarations: [ AppComponent,
        NavbarComponent,
        JumbotronComponent,
        HomeComponent,
        AboutComponent
    ],
    providers: [DemoService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
