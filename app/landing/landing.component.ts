import {Component, Input, animate, transition, style, state, trigger, OnInit} from '@angular/core';

@Component({
    selector: 'dj-landing',
    templateUrl: 'app/landing/landing.html',
    styleUrls: [
        'app/landing/landing.css'
    ]
})
export class LandingComponent {
    @Input() isVisible: boolean = true;

    ngOnInit(){
        console.log(this.isVisible)
        this.isVisible = false;
        console.log(this.isVisible)
    }
}