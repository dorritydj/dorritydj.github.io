/**
 * Created by Daniel on 10/2/2016.
 */
/**
 * Created by dorritydj on 8/5/16.
 */
import {Component, enableProdMode} from './@angular/core';
import {ROUTER_DIRECTIVES} from "./@angular/router";

enableProdMode()

@Component({
    selector: 'dj-app',
    templateUrl: 'app/app/app.html',
    styleUrls: [
        'app/app/app.css'
    ],
    directives: [
        ROUTER_DIRECTIVES
    ],
    precompile: [
    ]
})
export class AppComponent{
}

