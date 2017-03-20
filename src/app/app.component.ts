import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<header>
<nav>
<a [routerLink]="['Home']">Home</a>
<a [routerLink]="['ServiceRequest']">ServiceRequest</a>
</nav>



</header>
<router-outlet></router-outlet> `,
})
export class AppComponent  { name = 'Angular'; }
