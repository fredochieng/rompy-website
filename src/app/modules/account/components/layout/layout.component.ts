import { Component } from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.sass']
})
export class LayoutComponent {
    links: {label: string; url: string}[] = [
        {label: 'Dashboard', url: './dashboard'},
        {label: 'Edit Profile', url: './profile'},
        {label: 'availability', url: './availability'},
        {label: 'Add Service', url: './services'},
        {label: 'Password', url: './password'},
        {label: 'Subscription', url: './subscription'},
    ];

    constructor() { }
}
