import {Component} from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['event.component.css']
})

export class EventComponent {
  title = 'itt vagyunk';

  constructor() {
    console.log('${title} üzenet');
    this.greetengs();
  }

  greetengs() {
    console.log('nincs implemetálva');
  }
}
