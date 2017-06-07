import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <h1>{{pageTitle}}</h1>
       <p> My first application in angular 2</p>
    `
})
export class AppComponent {
    pageTitle:string ='Acme Product Management';
}
