import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavComponent } from "./nav/nav.component";
import {LandingComponent} from "./landing/landing.component";

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [
        NavComponent,
        LandingComponent
    ],
    bootstrap:    [
        NavComponent,
        LandingComponent
    ]
})
export class AppModule { }
