import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: "<router-outlet></router-outlet>", // for dynamic page
})
export class AppComponent {
    names = 'John doe'
    email = 'jondoe@gmail.com'
    address = {
        street: "House # 20",
        city: "Rawalpindi",
        state: "punjab"
    }
}
