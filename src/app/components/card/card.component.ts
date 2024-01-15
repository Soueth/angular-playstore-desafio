import { Component, Input } from '@angular/core';
import { CardLabelComponent } from "./card-label/card-label.component";
import { CardInfoComponent } from "./card-info/card-info.component";

@Component({
    selector: 'app-card',
    standalone: true,
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
    imports: [CardLabelComponent, CardInfoComponent]
})
export class CardComponent {
    @Input()
    gameCover: string = ''
    @Input()
    gameStatus: string = ''
    @Input()
    gameTitle: string = ''
    @Input()
    console: string = ''
    @Input()
    value: string = ''
}
