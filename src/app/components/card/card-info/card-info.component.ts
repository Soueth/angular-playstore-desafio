import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-info',
  standalone: true,
  imports: [],
  templateUrl: './card-info.component.html',
  styleUrl: './card-info.component.css'
})
export class CardInfoComponent {
  @Input()
  gameTitle: string = ''
  @Input()
  console: string = ''
  @Input()
  value: string = ''
}
