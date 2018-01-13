import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  events = ['sziget', 'efott', 'coca', 'pepsi'];
  show = true;
  klikkeljunkide = false;
  inputContent = 'hat, het';

  toggle() {
    this.show = !this.show;
  }

  demo(ev: MouseEvent) {
    console.log(ev.screenX);
  }
}
