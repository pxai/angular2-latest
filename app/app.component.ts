import { Component } from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HttpSampleComponent} from './httpsample.component';

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    providers: [
            ROUTER_PROVIDERS
    ],
    template: `<h1>{{title}}</h1>
                <nav>
                <ul>
                     <li><a href="/">Home of Sample app</a></li>
                     <li><a [routerLink]="['HttpSample']">Http Sample</a></li>
                </ul>
                </nav>
                <router-outlet></router-outlet>`
})
@RouteConfig([
  {path: '/httpsample', name: 'HttpSample', component: HttpSampleComponent, useAsDefault : true}
  ])
export class AppComponent {
    private title: string = 'Server samples';
}
