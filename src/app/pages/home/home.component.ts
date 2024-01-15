import { Component } from '@angular/core';
import { MenuComponent } from "../../components/menu/menu.component";
import { CardComponent } from "../../components/card/card.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [MenuComponent, CardComponent]
})
export class HomeComponent {

}
