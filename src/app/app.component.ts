import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'varró a király';
  events = ['sziget', 'efott', 'coca', 'pepsi'];
  show = true;
  klikkeljunkide = false;
  inputContent: String;

  pipeDemo = [
    {
      'id': 1,
      'name': 'danielv'
    },
    {
      'id': 2,
      'name': 'Loj'
    }
  ];

  toggle() {
    this.show = !this.show;
    this.inputContent = 'hat, het';
  }

  demo(ev: MouseEvent) {
    console.log(ev.screenX);
  }
}
